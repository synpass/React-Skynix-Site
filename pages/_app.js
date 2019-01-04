
/*
 * Overriding App component.
 * Now it is used only for defining should we show preloading intro animation (state rendered) or not
 * Feel free to remove code with animation  if you don't need this animation anymore
*/

import React from 'react'
import App, {Container} from 'next/app'
import BlogArticle from "../components/article-page/BlogArticle";
import Page from "../components/Page";
import Service from "../components/resources/service";
import Index from "./resources";
export default class MyApp extends App {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            rendered: false,
            articleLoaded: false,
        }
    }
    componentDidMount() {
        this.setState({rendered: true});
    }
    articleLoaded = () => this.setState({articleLoaded: true});
    _parseGetParams(gets) {
        let $_GET = {};
        let __GET = gets.split("&");
        for(let i=0; i<__GET.length; i++) {
            let getVar = __GET[i].split("=");
            $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1];
        }
        return $_GET;
    }
    render () {
        const {Component, pageProps, router} = this.props;
        // let thisRouter = router.asPath.split("?");
        // if(/article/ig.test(thisRouter[0]) && thisRouter[1]){
        //     let slug = this._parseGetParams(thisRouter[1]).slug;
        //     if(!slug) return false;
        //     return (
        //         <Page>
        //             <BlogArticle limit={1} onLoad={this.articleLoaded} slug={slug}/>
        //         </Page>
        //     )
        // }

        return (
            <Container>
                <Component {...pageProps} {...this.state} />
            </Container>
        )
    }
}

// MyApp.getInitialProps = async ({ query }) => {
//     let limit = 0;
//     let property;
//     await Service.getCatalogByPage(1)
//         .then(async(response) => {
//             console.log(response)
//
//             const {success, error, totals} = response;
//             let {data} = response;
//
//             if (success) {
//                 if (limit) {
//                     data = data.reverse();
//                     data.splice(0, data.length - limit);
//                 }
//
//                 let promises = [];
//
//                 data.forEach(item => {
//                     promises.push(Service.getPostMedia(item.featured_media));
//                     promises.push(Service.getAuthor(item.author));
//                 });
//
//                 await Promise.all(promises).then(response => {
//
//                     data.map((item, i) => {
//                         const {success: mediaSuccess, data: mediaData} = response[2 * i];
//                         const {success: authorSuccess, data: authorData} = response[2 * i + 1];
//
//                         if (mediaSuccess) item.imageUrl = mediaData.source_url;
//                         if (authorSuccess) item.authorName = authorData.name;
//                     });
//
//                 })
//                 property = {
//                     newsItems: data,
//                     newsTotals: totals
//                 }
//             }
//         })
//
//     return property;
// }