import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/privacypolicy/TitleHeader";
import PrivacyPolicyContent from "../components/privacypolicy/PrivacyPolicyContent";
import url from '../domain.config'
import {connect} from "react-redux"

class PrivacyPolicy extends Component {
    render() {
        return (
            <Page newsItems={this.props.newsItems}  loading={true} showLoader={this.props.showLoader} canonical={url + "/privacy-policy"}>
                <TitleHeader/>
                <PrivacyPolicyContent/>
            </Page>
        )
    }
}

export default connect(state => state)(PrivacyPolicy);