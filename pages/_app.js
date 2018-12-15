
/*
 * Overriding App component.
 * Now it is used only for defining should we show preloading intro animation (state rendered) or not
 * Feel free to remove this file if you don't need this animation anymore
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
    render () {
        const {Component, pageProps} = this.props;
        let thisRouter = this.props.router.asPath.split("/");

        if(/article/ig.test(thisRouter[1]) && thisRouter[2]){
            return (
                <Page>
                    <BlogArticle limit={1} onLoad={this.articleLoaded} slug={thisRouter[2]}/>
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