import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/termsconditions/TitleHeader";
import TermsConditionsContent from "../components/termsconditions/TermsConditionsContent";

export default class TermsConditions extends Component {
    render() {
        return (
            <Page newsItems={this.props.newsItems}>
                <TitleHeader/>
                <TermsConditionsContent/>
            </Page>
        )
    }
}