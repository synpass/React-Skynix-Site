import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/termsconditions/TitleHeader";
import TermsConditionsContent from "../components/termsconditions/TermsConditionsContent";
import url from '../domain.config'

export default class TermsConditions extends Component {
    render() {
        return (
            <Page newsItems={this.props.newsItems} showLoader={this.props.showLoader} canonical={url + '/terms-conditions'}>
                <TitleHeader/>
                <TermsConditionsContent/>
            </Page>
        )
    }
}