import React, {Component} from 'react';
import Page from "../components/Page";
import BlogArticle from "../components/article-page/BlogArticle";
import Service from "../components/resources/service";
import { withRouter } from 'next/router'
import url from '../domain.config'
import {connect} from "react-redux"


const ArticlePage = withRouter((props) => {
    const{slug, articleItems, news, showLoader} = props;

    return <ArticleWrap page={props.router.query.page} slug={slug} article={articleItems} news={news} showLoader={showLoader}/>
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
        const{slug, article, news, showLoader} = this.props;
        const acf = article[0].acf;
        const canonical = {canonicalUrl: url + '/resources/' + article[0].slug};
        const metaTime = {metaPublishedTime: article[0].date, metaModifiedTime: article[0].modified};
        const sameMeta ={ogLocale: 'en_US', ogType: 'article'};
        const schema = {
            "@context":"http:\/\/schema.org",
            "@type":"BlogPosting",
            "url": canonical.canonicalUrl,
            "headline": article[0].title.rendered,
            "datePublished": article[0].date,
            "dateModified": article[0].modified,
            "description": article[0].acf.description,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonical.canonicalUrl
            },
            "publisher": {
                "@type": "Organization",
                "@id": url,
                "name": "Skynix LLC",
                "logo": url + "/static/images/skynix_logo_2018.svg"
            },
            "image": {
                "@type": "ImageObject",
                "url": article[0].imageUrl,
                "width": "1134",
                "height": "567",
            },
            "author": {
                "@type": "Person",
                "name": article[0].authorName,
                "image": {
                    "@type": "ImageObject",
                    "url": article[0].avatar,
                    "height": "96",
                    "width": "96"
                }
            }
        }

        const meta = {...acf , ...canonical, ...sameMeta, ...metaTime}

        return (
            <Page meta={meta} loading={true} newsItems={news} showLoader={showLoader} canonical={canonical.canonicalUrl} schemaData={schema}>
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

                data.forEach(news=>{
                    if(news.content) delete news.content
                    if(news.excerpt) delete news.excerpt
                })

                property.news = data;
                property.newsTotals = totals;

            }
        });

    return property;
}

export default ArticlePage;