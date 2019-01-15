import React, {Component} from 'react';
import Page from "../components/Page";
import Experience from "../components/portfolio/Experience";
import Clients from "../components/portfolio/Clients";

export default function Portfolio(props) {
	return (
        <Page newsItems={props.newsItems}>
            <Experience/>
            <Clients/>
        </Page>
	)
}