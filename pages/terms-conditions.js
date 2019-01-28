import React, {Component} from 'react';
import Page from "../components/Page";
import TitleHeader from "../components/termsconditions/TitleHeader";
import TermsConditionsContent from "../components/termsconditions/TermsConditionsContent";
import url from '../domain.config'
import {connect} from "react-redux"

class TermsConditions extends Component {
    render() {
        return (
            <Page loading={true} newsItems={this.props.newsItems} showLoader={this.props.showLoader} canonical={url + '/terms-conditions'}>
                <TitleHeader/>
                <TermsConditionsContent/>
            </Page>
        )
    }
}

export default connect(state => state)(TermsConditions);