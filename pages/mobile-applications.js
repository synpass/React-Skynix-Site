import React from 'react'
import DataMigration from '../components/e-commerce/DataMigration';
import Page from '../components/Page';
import meta from './ecommerce-meta.config.json';
import url from '../domain.config'
import HeroText from '../components/e-commerce/HeroText';
import {array, bool} from 'prop-types'
import Platform from '../components/e-commerce/platform/Platform';

export default function MobileApplications(props) {

    const heroTextData = {
        heading: 'Mobile App Design and Development',
        paragraph: 'Reach your clients no matter where they are: commuting, queuing, resting or having a coffee break.'
    }

    const dataMigrationSectionData = {
        heading: 'Cross-platform adaptation',
        subheadingLine: 'Deliver your message clearly and effectively to every device, exactly as you intend it.',
        subheading: '',
        rightColumnContent: <> </>,
        withAnimation: true
    }

    const platformData = {
        heading: 'Beacons',
        subheadning: 'Stand out from competition by offering your visitors a truly unique and memorable in-store experience.'
    }

    return (
        <Page meta={meta} loading={true} newsItems={props.newsItems} showLoader={props.showLoader} canonical={url + "/ecommerce"}>
            <HeroText {...heroTextData} />
            <DataMigration {...dataMigrationSectionData} />
            <Platform {...platformData} parallax />
        </Page>
    )
}

MobileApplications.propTypes = {
    newsItems: array,
    showLoader: bool
}
