import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/privacypolicy/TitleHeader";
import PrivacyPolicyContent from "../components/privacypolicy/PrivacyPolicyContent";

export default class PrivacyPolicy extends Component {
    render() {
        return (
            <Page newsItems={this.props.newsItems} showLoader={this.props.showLoader}>
                <TitleHeader/>
                <PrivacyPolicyContent/>
            </Page>
        )
    }
}