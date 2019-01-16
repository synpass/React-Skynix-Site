import React, {Component} from 'react';
import Page from "../components/Page";
import BlogArticle from "../components/article-page/BlogArticle";
import Service from "../components/resources/service";
import { withRouter } from 'next/router'


const ArticlePage = withRouter((props) => {
    const{slug, articleItems, news} = props;
    return <ArticleWrap page={props.router.query.page} slug={slug} article={articleItems} news={news}/>
});


class ArticleWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleLoaded: false,
        };
    }

    articleLoaded = () => this.setState({articleLoaded: true});
    render() {
        const{slug, article, news} = this.props;
        const meta = article[0].acf;
        return (
            <Page meta={meta} newsItems={news}>
                <BlogArticle article={article} limit={1} onLoad={this.articleLoaded} slug={slug}/>
            </Page>
        )
    }
}


ArticlePage.getInitialProps = async ({ query }) => {
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

    await Service.getCatalogByPage(1)
        .then(async (response) => {

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
                    });

                })
                property.news = data;
                property.newsTotals = totals;

            }
        });

    return property;
}


export default ArticlePage;