import React, {Component} from 'react';
import Page from "../components/Page";
import HeroText from "../components/e-commerce/HeroText";
import DataMigration from "../components/e-commerce/DataMigration";
import ThemeDev from "../components/e-commerce/ThemeDev";
import Brands from "../components/e-commerce/Brands";
import OfflineCommerce from "../components/e-commerce/OfflineCommerce";
import Platform from "../components/e-commerce/platform/Platform";
import BugFixing from "../components/e-commerce/BugFixing";
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

        const themeDevData = {
            heading: "CRM / ERP Design and Development",
            subheading: <>  Get a toolset unique to your business model, with <b>everything you, your clients and your employees need.</b> 
             </>,
             paragraph: <p>No distractions, no binds and uncertainty associated with using third party services.</p>
        }

        const brandsConfog = [
            {
              "id": 0,
              "imgClass": "angular",
              "img": "angular-logo.png",
              "link": "",
              "linkTitle": "Angular"
            },
            {
              "id": 2,
              "imgClass": "node",
              "img": "node-logo.png",
              "link": "",
              "linkTitle": "NodeJS"
            },
            {
              "id": 4,
              "imgClass": "docker",
              "img": "docker-logo.png",
              "link": "",
              "linkTitle": "Docker"
            },
            {
              "id": 1,
              "imgClass": "react",
              "img": "react-logo.png",
              "link": "",
              "linkTitle": "React"
            },
            {
              "id": 3,
              "imgClass": "phonegap",
              "img": "phonegap-logo.png",
              "link": "",
              "linkTitle": "phonegap"
            }
          ]

        return (
            <Page meta={meta} loading={true} newsItems={this.props.newsItems} showLoader={this.props.showLoader} canonical={url + "/ecommerce"}>
                <HeroText {...heroTextData} />
                <ThemeDev {...themeDevData} />
                <Brands brands={brandsConfog}/>
                <Platform/>
                <DataMigration/>
                <BugFixing/>
                <OfflineCommerce/>
            </Page>
        )
    }
}

export default connect(state => state)(BusinessSoftware);