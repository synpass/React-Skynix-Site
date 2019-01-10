import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/technologies/TitleHeader";
import RichBackend from "../components/technologies/RichBackend";

export default class Technologies extends Component {
    render() {
        return (
            <Page>
                <TitleHeader/>
                <RichBackend/>
            </Page>
        )
    }
}