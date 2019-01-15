import React, {Component} from 'react';
import Page from "../components/Page";
import Experience from "../components/portfolio/Experience";

export default class Portfolio extends Component {
    render() {
        return (
            <Page newsItems={this.props.newsItems}>
                <Experience/>
            </Page>
        )
    }
}