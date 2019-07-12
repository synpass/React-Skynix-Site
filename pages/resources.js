import React, {Component} from 'react';
import Page from "../components/Page";
import Catalog from "../components/resources/Catalog";
import { withRouter } from 'next/router'
import TitleHeader from "../components/resources/TitleHeader";
import Service from "../components/resources/service";
import meta from './resources-meta.config.json';
import url from '../domain.config'
import {connect} from "react-redux"
import PostFilters from '../components/PostFilters/PostFilters';
import AuthorName from '../components/article-page/AuthorName';

const Resources = withRouter((props) => {
    return <ResourcesWrapper router={props.router} items={props.items} totals={props.totals} news={props.news} showLoader={props.showLoader}/>
});

class ResourcesWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, posts: null, totals: null }
    }

    setPosts = async (response) => {
        if(response === null) {
            this.setState({posts: null})
            return
        }

        const withMedia = response.data.data.map(async item => {
            const media = await Service.getPostMedia(item.featured_media)
            const author = await Service.getAuthor(item.author)
    
            let authorName
            let image
            if (media.success) image = media.data.source_url

            if (author.success) authorName = author.data.name;
            return {...item, authorName, imageUrl: image}
        })
        await Promise.all(withMedia).then(updatedPosts => {
            this.setState({posts: updatedPosts, totals: response.totals})
        })

    }

    onPageLoaded = () => this.setState({isLoaded: true, footerLoaded: true});

    render() {
        const { props, state, onPageLoaded, setPosts } = this

        return (
            <Page meta={meta} news={props.news} loading={true} isLoaded={state.isLoaded} showLoader={props.showLoader} canonical={url + '/resources'}>
                <TitleHeader/>
                <PostFilters 
                    setPostsData={setPosts} 
                    router={props.router} 
                    categories={props.router.query.categories}
                    tags={props.router.query.tags} />
                <Catalog 
                    categories={props.router.query.categories}
                    tags={props.router.query.tags}
                    onLoad={onPageLoaded} 
                    page={props.router.query.page || 1} 
                    items={state.posts || props.items} 
                    totals={state.totals || props.totals}/>
            </Page>
        )
    }
}

Resources.getInitialProps = async ({ query }) => {

    let limit = 0;
    let property = {},
        page = query.page!==undefined?['1', query.page]:['1'];

    const filters = {
        tags: query.tags,
        categories: query.categories
    }

    for(let i=0; i<page.length; i++){
        await Service.getFilteredPosts(page[i], filters)
            .then(async(response) => {

                const {success, error, totals} = response;
                let {data} = response;

                if (success) {
                    if (limit) {
                        data = data.reverse();
                        data.splice(0, data.length - limit);
                    }

                    let promises = [];

                    data.forEach(item => {
                        promises.push(Service.getPostMedia(item.featured_media));
                        promises.push(Service.getAuthor(item.author));
                    });

                    await Promise.all(promises).then(response => {

                        data.map((item, i) => {
                            const {success: mediaSuccess, data: mediaData} = response[2 * i];
                            const {success: authorSuccess, data: authorData} = response[2 * i + 1];

                            if (mediaSuccess) item.imageUrl = mediaData.source_url;
                            if (authorSuccess) item.authorName = authorData.name;

                            if(item.content) {
                                item.content.rendered = item.content.rendered.replace(/<[^>]*>/g, '').slice(0,91);
                            }

                            if(item.excerpt) delete item.excerpt
                        });

                    })

                    property.items  = data;
                    property.totals = totals

                    if(page[i]==='1'){
                        property.news = data.map(news=>Object.assign({}, news));

                        property.news.map(info=>{
                            if(info.content) delete info.content
                        })
                    }
                }
            })
    }

    return property;
}


export default Resources;