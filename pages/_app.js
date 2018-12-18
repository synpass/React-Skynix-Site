
/*
 * Overriding App component.
 * Now it is used only for defining should we show preloading intro animation (state rendered) or not
 * Feel free to remove code with animation  if you don't need this animation anymore
*/

import React from 'react'
import App, {Container} from 'next/app'
import BlogArticle from "../components/article-page/BlogArticle";
import Page from "../components/Page";
export default class MyApp extends App {
    constructor(props) {
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
        let thisRouter = router.asPath.split("?");
        if(/article/ig.test(thisRouter[0]) && thisRouter[1]){
            let slug = this._parseGetParams(thisRouter[1]).slug;
            if(!slug) return false;
            return (
                <Page>
                    <BlogArticle limit={1} onLoad={this.articleLoaded} slug={slug}/>
                </Page>
            )
        }

        return (
            <Container>
                <Component {...pageProps} {...this.state} />
            </Container>
        )
    }
}