import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/about/TitleHeader";
import History from "../components/about/History";
import Ideology from "../components/about/Ideology";
import SkynixTeam from "../components/about/SkynixTeam";

export default class AboutSkynix extends Component {
	render() {
		return (
			<Page>
				<TitleHeader/>
				<History/>
				<Ideology/>
				<SkynixTeam/>
			</Page>
		)
	}
}