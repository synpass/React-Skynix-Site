import React, {Component} from 'react';
import Page from "../components/Page";
import Experience from "../components/portfolio/Experience";

export default function Portfolio(props) {
	return (
        <Page newsItems={props.newsItems}>
            <Experience/>
        </Page>
	)
}