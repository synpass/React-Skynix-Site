import React, {Component} from 'react'
import DataMigration from '../components/e-commerce/DataMigration';
import Page from '../components/Page';
import meta from './ecommerce-meta.config.json';
import url from '../domain.config'
import HeroText from '../components/e-commerce/HeroText';
import {array, bool} from 'prop-types'
import Platform from '../components/e-commerce/platform/Platform';

export default class MobileApplications extends Component {

    state = {
        mapInSight: false
    }
    mapRef = React.createRef()

    componentDidMount () {
        document.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount () {
        document.removeEventListener('scroll', this.onScroll)
    }

    onScroll = () => {
        if (!this.mapRef || !this.mapRef.current) return

        const rect = this.mapRef.current.getBoundingClientRect();
        if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document. documentElement.clientWidth) 
        ) {
            this.setState({ mapInSight: true })
            document.removeEventListener('scroll', this.onScroll)
        }
    }

    render () {
        const heroTextData = {
            heading: 'Mobile App Design and Development',
            paragraph: 'Reach your clients no matter where they are: commuting, queuing, resting or having a coffee break.'
        }
    
        const dataMigrationSectionData = {
            heading: 'Cross-platform adaptation',
            subheadingLine: 'Deliver your message clearly and effectively to every device, exactly as you intend it.',
            subheading: '',
            rightColumnContent: <> </>,
            withAnimation: true,
            firstDownload: true
        }
    
        const platformData = {
            heading: 'Beacons',
            subheadning: 'Stand out from competition by offering your visitors a truly unique and memorable in-store experience.'
        }
    
        const geolocationSectionData = {
            heading: 'Geolocation & Tracking',
            subheadingLine: 'Incorporate real world data into your application to better track your logistics or help your customers find your physical location.',
            subheading: '',
            rightColumnContent: 
            <div className="ec-datamigration__image-container" ref={this.mapRef}> 
                <img src='/static/images/map.svg' />  
                <img src="/static/images/mark.svg"
                    className={this.state.mapInSight ? 
                    'ec-datamigration__mark-icon ec-datamigration__mark-icon--active' : 
                    'ec-datamigration__mark-icon'} />
            </div>,
        }
    
        return (
            <Page meta={meta} loading={true} newsItems={this.props.newsItems} showLoader={this.props.showLoader} canonical={url + "/ecommerce"}>
                <HeroText {...heroTextData} />
                <DataMigration {...dataMigrationSectionData} />
                <Platform {...platformData} parallax />
                <DataMigration {...geolocationSectionData} negativeMargin/>
            </Page>
        )
    }    
}

MobileApplications.propTypes = {
    newsItems: array,
    showLoader: bool
}
