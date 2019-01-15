import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/technologies/TitleHeader";
import RichBackend from "../components/technologies/RichBackend";
import ElegantFrontend from "../components/technologies/ElegantFrontend";
import Development from "../components/technologies/Development";
import QualityAssurance from "../components/technologies/QualityAssurance";

export default class Technologies extends Component {
    render() {
        return (
            <Page newsItems={this.props.newsItems}>
                <TitleHeader/>
                <RichBackend/>
                <ElegantFrontend/>
                <Development/>
                <QualityAssurance/>
            </Page>
        )
    }
}