import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/about/TitleHeader";
import History from "../components/about/History";
import Ideology from "../components/about/Ideology";
import Careers from "../components/about/Careers";
import Modal from "../components/about/libs/Modal.js";

export default class AboutSkynix extends Component {
    render() {
        return (
            <Page>
                <TitleHeader/>
                <History/>
                <Ideology/>
                <Careers/>
                <Modal/>
            </Page>
        )
    }
}