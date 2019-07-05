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


class BusinessSoftware extends Component {
    
    render() {

        const heroTextData = {
            heading: 'Scalable cloud and web software for small and medium business',
            paragraph: <> Uncommon business operations require <b>tailored software</b>
            in order to hit their specific targets. 
            Template solutions are often too restrictive to meet every need of your scaling business.
            <br/> <br/>
            Skynix has a proven track record of building ultra-scalable architectures and <b>allowing companies expand 
            naturally and cost-effectively.</b>
             </>
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

export default connect(state => state)(BusinessSoftware);