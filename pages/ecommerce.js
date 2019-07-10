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

        const themeDevData = {
            heading: 'Online Shop Theme Development',
            subheading: 'Refresh your brand identity, attract and retain more customers by making their shopping experience with you a breeze',
            paragraph: <><p>Your store must remain clear and user-friendly, provide all the necessary information yet not
            overwhelm or distract your customers from completing the purchase.</p>
            <p>Skynix UI team works tightly with platform experts to find <b>a perfect balance between
            usability and appeal.</b></p></>
        }

        const platformData = {
            heading: 'Platform Customization and Integration',
            subheadning: 'Merge and manage all your systems and tools conveniently from one, single interface',
            paragraph: 'Skynix provides custom e-store tuning and takes on the creation of new modules tailored specifically to your business strategy'
        }

        const dataMigrationSectionData = {
            heading: <> Data Migration<br />
                        & Product Structuring </>,
            subheadingLine: 'Upgrade your old platform to a more powerful one without losing any valuable customer data and search engine reputation collected over the years',
            subheading: 'Improve site usability and conversion level by creating a working catalog and product page structure'
        }

        const bugFixingData = {
            heading: 'Bug Fixing, Security Monitoring and Maintenance',
            subheading: <>Sleep tight knowing your online store is out of risk with<br />
            the backup of our thorough Magento and Woocommerce<br />
            developers, who can:</>,
            points: <><p><b>•  efficiently</b> configure your server and platform</p>
            <p><b>•  quickly</b> detect and fix any vulnerabilities</p>
            <p><b>•  regularly</b> apply security patches</p></>
        }



        return (
            <Page meta={meta} loading={true} newsItems={this.props.newsItems} showLoader={this.props.showLoader} canonical={url + "/ecommerce"}>
                <HeroText {...heroTextData} />
                <ThemeDev {...themeDevData} />
                <Brands brands={brands}/>
                <Platform {...platformData} parallax />
                <DataMigration {...dataMigrationSectionData} negativeMargin/>
                <BugFixing {...bugFixingData} />
                <OfflineCommerce/>
            </Page>
        )
    }
}

export default connect(state => state)(Ecommerce);