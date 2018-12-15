import React, {Component} from 'react';
import Page from "../components/Page";
import BlogArticle from "../components/article-page/BlogArticle";
import Comments from '../components/article-page/Comments.js';
export default class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleLoaded: false,
        };
    }
    articleLoaded = () => this.setState({articleLoaded: true});
    render() {
        return (
            <Page>
                <BlogArticle limit={1} onLoad={this.articleLoaded} slug='how-to-set-404-status-code-in-angular'/>
                <Comments/>
            </Page>
        )
    }
}