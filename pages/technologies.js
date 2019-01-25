import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/technologies/TitleHeader";
import RichBackend from "../components/technologies/RichBackend";
import ElegantFrontend from "../components/technologies/ElegantFrontend";
import Development from "../components/technologies/Development";
import meta from './index-meta.config.json';
import QualityAssurance from "../components/technologies/QualityAssurance";
import Engine from "../components/technologies/Engine";
import ProjectManagement from "../components/technologies/ProjectManagement";
import url from '../domain.config'
import {connect} from "react-redux"

class Technologies extends Component{

    componentWillUnmount() {
        console.log(this.props)
        if(this.props.animatedLoader == true){
            this.props.dispatch({type: 'animatedLoader', payload: false})
        }
    }
    render() {
	    return (
            <Page meta={meta} loading={true} newsItems={this.props.newsItems} showLoader={this.props.showLoader} canonical={url + '/technologies'}>
                <TitleHeader/>
                <RichBackend/>
                <ElegantFrontend/>
                <Development/>
                <QualityAssurance/>
                <Engine/>
                <ProjectManagement/>
            </Page>
        )
    }
}

export default connect(state => state)(Technologies);