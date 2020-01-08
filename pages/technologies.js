import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/technologies/TitleHeader";
import RichBackend from "../components/technologies/RichBackend";
import ElegantFrontend from "../components/technologies/ElegantFrontend";
import Development from "../components/technologies/Development";
import meta from './tech-meta.config.json';
import QualityAssurance from "../components/technologies/QualityAssurance";
import Engine from "../components/technologies/Engine";
import ProjectManagement from "../components/technologies/ProjectManagement";
import url from '../domain.config'
import {connect} from "react-redux"
import Banner from "../components/Banner";

class Technologies extends Component{

    render() {
	    return (
            <Page meta={meta} loading={true} newsItems={this.props.newsItems} showLoader={this.props.showLoader} canonical={url + '/technologies'}>
                <Banner title={'technology stack'} />
                <TitleHeader/>
                <RichBackend/>
                <ElegantFrontend/>
                <Development/>
                <QualityAssurance/>
                <Engine/>
            </Page>
        )
    }
}

export default connect(state => state)(Technologies);