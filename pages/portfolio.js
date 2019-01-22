import React, {Component} from 'react';
import meta from './index-meta.config.json';
import Page from "../components/Page";
import Experience from "../components/portfolio/Experience";
import Clients from "../components/portfolio/Clients";
import url from '../domain.config'

export default function Portfolio(props) {
	return (
        <Page meta={meta} newsItems={props.newsItems} showLoader={props.showLoader} canonical={url + "/portfolio"}>
            <Experience/>
            <Clients/>
        </Page>
	)
}