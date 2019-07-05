import React, {Component} from 'react';
import Page from "../components/Page";
import HeroText from "../components/e-commerce/HeroText";
import DataMigration from "../components/e-commerce/DataMigration";
import ThemeDev from "../components/e-commerce/ThemeDev";
import Brands from "../components/e-commerce/Brands";
import OfflineCommerce from "../components/e-commerce/OfflineCommerce";
import Platform from "../components/e-commerce/platform/Platform";
import BugFixing from "../components/e-commerce/BugFixing";
import brands from '../components/e-commerce/configs/brands.config.json';
import meta from './ecommerce-meta.config.json';
import url from '../domain.config'
import {connect} from "react-redux"


class Ecommerce extends Component {
    
    render() {
        const heroTextData = {
            heading: <>first-rate <b>e-commerce</b><br/> web development services </>,
            paragraph: <> Whether you need to start an e-store from scratch or to extend functionality of an existing one, you are in the right place. Skynix is an <b>e-commerce development company</b>, specialised in Magentoand Woocommerce platforms </>
        }



        return (
            <Page meta={meta} loading={true} newsItems={this.props.newsItems} showLoader={this.props.showLoader} canonical={url + "/ecommerce"}>
                <HeroText {...heroTextData} />
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