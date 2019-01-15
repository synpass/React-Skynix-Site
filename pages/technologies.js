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

export default function Technologies(props) {
	return (
        <Page meta={meta} newsItems={props.newsItems}>
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