import React, {Component} from 'react';
import Page from "../components/Page";
import Rate from "../components/e-commerce/Rate";
import DataMigration from "../components/e-commerce/DataMigration";
import ThemeDev from "../components/e-commerce/ThemeDev";
import Brands from "../components/e-commerce/Brands";
import OfflineCommerce from "../components/e-commerce/OfflineCommerce";
import Platform from "../components/e-commerce/platform/Platform";
import BugFixing from "../components/e-commerce/BugFixing";
import brands from '../components/e-commerce/configs/brands.config.json';
import meta from './index-meta.config.json';
import url from '../domain.config'
import {connect} from "react-redux"


class Ecommerce extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        if(this.props.animatedLoader == true){
            this.props.dispatch({type: 'animatedLoader', payload: false})
        }
    }
    render() {
        return (
            <Page meta={meta} loading={true} newsItems={this.props.newsItems} showLoader={this.props.showLoader} canonical={url + "/ecommerce"}>
                <Rate/>
                <ThemeDev/>
                <Brands brands={brands}/>
                <Platform/>
                <DataMigration/>
                <BugFixing/>
                <OfflineCommerce/>
            </Page>
        )
    }
}

export default connect(state => state)(Ecommerce);