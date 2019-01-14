import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/about/TitleHeader";
import History from "../components/about/History";
import Ideology from "../components/about/Ideology";
import SkynixTeam from "../components/about/SkynixTeam";
import Careers from "../components/about/Careers";
import Modal from "../components/about/libs/Modal.js";

export default class AboutSkynix extends Component {
	render() {
		return (
			<Page newsItems={this.props.newsItems}>
				<TitleHeader/>
				<History/>
				<Ideology/>
				<SkynixTeam/>
				<Careers/>
				<Modal/>
			</Page>
		)
	}
}