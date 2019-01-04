import React, {Component} from 'react';
import Page from "../../components/Page";
import BlogArticle from "../../components/article-page/BlogArticle";
import Service from "../../components/resources/service";
import Resources from "./index";
export default class ArticlePage extends Component {
    constructor(props) {
        super(props);
        console.log(props)


        this.state = {
            articleLoaded: false,
        };
    }

    articleLoaded = () => this.setState({articleLoaded: true});
    render() {
        console.log('render')
        const{slug} = this.props;
        return (
            <Page>
                <BlogArticle articleItems={this.props.articleItems} totals={this.props.totals} limit={1} onLoad={this.articleLoaded} slug={slug}/>
            </Page>
        )
    }
}

ArticlePage.getInitialProps = async ({ query }) => {
    // console.log(query)
    let property,
        limit = query.limit || 0;
    await Service.getArticleBySlug(query.slug)
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
                        if (authorSuccess){
                            item.authorName = authorData.name;
                            item.avatar = authorData.avatar_urls['96'];
                        }
                    });
                })

                property = {
                    articleItems: data,
                    totals: totals
                }
            }
        })

    return property;
}