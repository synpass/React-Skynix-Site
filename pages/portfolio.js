import React, {Component} from 'react';
import meta from './portfolio-meta.config.json';
import Page from "../components/Page";
import Experience from "../components/portfolio/Experience";
import Clients from "../components/portfolio/Clients";
import url from '../domain.config'
import {connect} from "react-redux"

class Portfolio extends Component {

    render() {
	    return (
                <Page meta={meta} newsItems={this.props.newsItems} loading={true} showLoader={this.props.showLoader} canonical={url + "/portfolio"}>
                    <Experience/>
                    <Clients/>
                </Page>
            )
        }
}

export default connect(state => state)(Portfolio);