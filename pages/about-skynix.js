import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/about/TitleHeader";
import History from "../components/about/History";

export default class AboutSkynix extends Component {
    render() {
        return (
            <Page>
                <TitleHeader/>
                <History/>
            </Page>
        )
    }
}