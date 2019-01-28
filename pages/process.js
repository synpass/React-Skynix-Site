import React, {Component} from 'react';
import Page from "../components/Page";
import {connect} from "react-redux"
import Approach from "../components/process/Approach";
import TestDriven from "../components/process/TestDriven";
import Competitivepricing from "../components/process/CompetitivePricing";
import Engagement from "../components/process/Engagement";
import Partnership from "../components/process/Partnership";
import meta from './process-meta.config.json';
import url from '../domain.config'

class Process extends Component {
	render() {
		return (
			<Page meta={meta} newsItems={this.props.newsItems} loading={true} showLoader={this.props.showLoader} canonical={url + "/process"}>
				<Approach/>
				<TestDriven/>
				<Competitivepricing/>
				<Engagement/>
				<Partnership/>
			</Page>
		)
	}
}

export default connect(state => state)(Process);