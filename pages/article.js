import React, {Component} from 'react';
import Page from "../components/Page";
import BlogArticle from "../components/article-page/BlogArticle";
export default class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleLoaded: false,
        };
    }

    articleLoaded = () => this.setState({articleLoaded: true});
    render() {
        const{slug} = this.props;
        return (
            <Page>
                <BlogArticle limit={1} onLoad={this.articleLoaded} slug={slug}/>
            </Page>
        )
    }
}