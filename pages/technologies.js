import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/technologies/TitleHeader";
import RichBackend from "../components/technologies/RichBackend";
import ElegantFrontend from "../components/technologies/ElegantFrontend";
import Development from "../components/technologies/Development";
export default class Technologies extends Component {
    render() {
        return (
            <Page>
                <TitleHeader/>
                <RichBackend/>
                <ElegantFrontend/>
                <Development/>
            </Page>
        )
    }
}