import React, {Component} from 'react';
import Page from "../components/Page";
import HeroText from "../components/e-commerce/HeroText";
import DataMigration from "../components/e-commerce/DataMigration";
import ThemeDev from "../components/e-commerce/ThemeDev";
import Brands from "../components/e-commerce/Brands";
import Platform from "../components/e-commerce/platform/Platform";
import BugFixing from "../components/e-commerce/BugFixing";
import { seo } from './business-software.config.json';
import url from '../domain.config'
import {connect} from "react-redux"
import { brandsConfig, animatedList } from "./business-software.config.json";
import PropTypes from 'prop-types';


function BusinessSoftware(props) {
    const heroTextData = {
        heading: 'Scalable cloud and web software for small and medium business',
        paragraph: <> Uncommon business operations require <b>tailored software</b> in order to hit their specific targets.
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

    const platformData = {
        heading: 'Synchronize several systems into one.',
        subheadning: 'Monitor or manage them all conveniently from one place.',
        paragraph: 'Payment processors, shipping providers, social networks, CRM systems, productivity tools, analytics and dozens of others'
    }

    const dataMigrationSectionData = {
      heading: 'Website and Platform Customization',
      subheadingLine: 'Improve your workflow by extending the abilities of your existing PHP-based system.',
      subheading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia nemo labore cumque, amet error.',
      rightColumnContent: <> <img className="ec-datamigration__img-25" src="/static/images/process/testdriven/development.svg" /> </>
    }

  const bugFixingData = {
    heading: 'Product Maintenance',
    subheading: <>Access specialists on-demand who can maintain your software, <br />
    with no need to hire an IT team on a payroll.</>,
    points: <><p> <b>• DevOps </b></p>
    <p> <b>• System Administrators </b></p>
    <p> <b>• QA testers </b></p>
    <p> <b>• SEO Specialists </b></p>
    <p> <b>• Backend Developers</b> </p>
    <p> <b>• Frontend Developers </b></p>
    <p> <b>• Designers</b> </p>
    <p> <b>• Product Managers </b></p>
    <p> <b>• Content Managers </b></p>
    </>
  }


    return (
        <Page meta={seo} loading={true} newsItems={props.newsItems} showLoader={props.showLoader} canonical={url + "/business-software"}>
            <HeroText {...heroTextData} />
            <ThemeDev {...themeDevData} />
            <Brands brands={brandsConfig}/>
            <Platform {...platformData} animatedList listData={animatedList}/>
            <DataMigration {...dataMigrationSectionData} />
            <BugFixing {...bugFixingData}/>
        </Page>
    )
}

BusinessSoftware.propTypes = {
  newsItems: PropTypes.array,
  showLoader: PropTypes.bool
}

export default connect(state => state)(BusinessSoftware);