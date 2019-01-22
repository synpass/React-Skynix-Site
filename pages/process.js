import React, {Component} from 'react';
import Page from "../components/Page";

import Approach from "../components/process/Approach";
import TestDriven from "../components/process/TestDriven";
import Competitivepricing from "../components/process/CompetitivePricing";
import Engagement from "../components/process/Engagement";
import Partnership from "../components/process/Partnership";
import meta from './index-meta.config.json';
import url from '../domain.config'

export default class Process extends Component {
	render() {
		return (
			<Page meta={meta} newsItems={this.props.newsItems} showLoader={this.props.showLoader} canonical={url + "/process"}>
				<Approach/>
				<TestDriven/>
				<Competitivepricing/>
				<Engagement/>
				<Partnership/>
			</Page>
		)
	}
}