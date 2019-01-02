import React, {Component} from 'react';
import Page from "../components/Page";

import Approach from "../components/process/Approach";
import Competitivepricing from "../components/process/CompetitivePricing";
import Engagement from "../components/process/Engagement";
import Partnership from "../components/process/Partnership";

import meta from './index-meta.config.json';

export default class Process extends Component {
	render() {
		return (
			<Page meta={meta}>
				<Approach/>
				<Competitivepricing/>
				<Engagement/>
				<Partnership/>
			</Page>
		)
	}
}