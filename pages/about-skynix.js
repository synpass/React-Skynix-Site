import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/about/TitleHeader";
import History from "../components/about/History";
import Ideology from "../components/about/Ideology";
import SkynixTeam from "../components/about/SkynixTeam";
import Careers from "../components/about/Careers";
import Modal from "../components/about/libs/Modal.js";
import Numbers from "../components/home-slides/Numbers";
import meta from './about-meta.config.json';
import url from '../domain.config'
import {connect} from "react-redux"


class AboutSkynix extends Component {


    render() {
        return (
            <Page meta={meta} loading={true} newsItems={this.props.newsItems} showLoader={this.props.showLoader} canonical= {url + '/about-skynix'}>
                <TitleHeader/>
                <History/>
                <Ideology/>
                <SkynixTeam/>
                <Numbers heading="careers" about="JOIN US" config="jobs"/>
                <Modal/>
            </Page>
        )
    }
}

export default connect(state => state)(AboutSkynix);