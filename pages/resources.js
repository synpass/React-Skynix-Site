import React, {Component} from 'react';
import Page from "../components/Page";
import Catalog from "../components/resources/Catalog";
import { withRouter } from 'next/router'
import TitleHeader from "../components/resources/TitleHeader";
import Service from "../components/resources/service";
import meta from './index-meta.config.json';
import url from '../domain.config'
import {connect} from "react-redux"

const Resources = withRouter((props) => {
    return <ResourcesWrapper page={props.router.query.page} items={props.items} totals={props.totals} news={props.news} showLoader={props.showLoader}/>
});

class ResourcesWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoaded: false}
    }

    componentWillUnmount() {
        if(this.props.animatedLoader == true){
            this.props.dispatch({type: 'animatedLoader', payload: false})
        }
    }

    onPageLoaded = () => this.setState({isLoaded: true, footerLoaded: true});

    render() {
        return (
            <Page meta={meta} news={this.props.news} loading={true} isLoaded={this.state.isLoaded} showLoader={this.props.showLoader} canonical={url + '/resources'}>
                <TitleHeader/>
                <Catalog onLoad={this.onPageLoaded} page={this.props.page} items={this.props.items} totals={this.props.totals}/>
            </Page>
        )
    }
}

Resources.getInitialProps = async ({ query }) => {
    let limit = 0;
    let property = {},
        page = query.page!==undefined?['1', query.page]:['1'];


    for(let i=0; i<page.length; i++){
        await Service.getCatalogByPage(page[i])
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


ResourcesWrapper.defaultProps = {
    page: 1
};

export default Resources;
connect(state => state)(ResourcesWrapper);