import React, {Component} from 'react';
import meta from './portfolio-meta.config.json';
import Page from "../components/Page";
import Experience from "../components/portfolio/Experience";
import url from '../domain.config';
import {connect} from "react-redux";
import { object, number, string, oneOfType } from "prop-types";
import ProjectsList from '../components/portfolio/ProjectsList.js';
import Service from '../components/resources/service.js';

class Portfolio extends Component {
    render() {

        const {page, totalProjects, projects} = this.props

	    return (
                <Page meta={meta} newsItems={this.props.newsItems} loading={true} showLoader={this.props.showLoader} canonical={url + "/portfolio"}>
                    <Experience/>
                    <ProjectsList projects={projects.data} page={page} totals={totalProjects} />
                </Page>
            )
        }
}

Portfolio.propTypes = {
    projects: object,
    page: oneOfType([string, number]),
    totalProjects: oneOfType([string, number])
}

Portfolio.defaultProps = {
    projects: {data: []},
    page: 1,
    totalProjects: 1
}

Portfolio.getInitialProps = async ({ query }) => {
    let page = query.page || 1;
    const projectsReq = await Service.getAllPortfolioProjects(page);

    if (projectsReq.success) {
        return {projects: projectsReq, totalProjects: projectsReq.totals, page}
    }

}

export default connect(state => state)(Portfolio);