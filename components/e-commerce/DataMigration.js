import React from 'react';
import LazyLoad from "../LazyLoad";
import {oneOfType, string, object, bool} from "prop-types"
import PlaneAnimation from '../PlaneAnimation/PlaneAnimation';

export default function DataMigration(props) {
    return (
        <LazyLoad className='ec-datamigration' id='ecDatamigration' animationIn='fadeIn' animationInDelay={600}>
            <h2 className={props.negativeMargin ? `section-heading section-heading--negative-margin` : `section-heading`}> {props.heading} </h2>
            <div className='ec-datamigration__container'>
                <div>
                    <h4 className='paragraph paragraph--large'>
                        {props.subheadingLine}
                    </h4>
                    <h4 className='paragraph paragraph--large ec-datamigration__disable-line'>
                        {props.subheading}
                    </h4>
                </div>
                {props.withAnimation && <PlaneAnimation />}
                {props.rightColumnContent ? props.rightColumnContent :
                    <div className='ec-datamigration__columns-right'>
                        <p>Skynix has successfully performed SEO preservation, data migration and re-structuring between such platforms as:</p>
                        <ul>
                            <li>Magento 1</li>
                            <li>Shopify</li>
                            <li>Magento 2</li>
                            <li>Woocommerce</li>
                            <li>3Dcart</li>
                        </ul>
                        <a className="ec-datamigration__link" href="#">More about Magento 1 to Magento 2 migration</a>
                    </div>
                }
            </div>
        </LazyLoad>
    )
}

DataMigration.propTypes = {
    heading: oneOfType([object, string]),
    subheadingLine: oneOfType([object, string]),
    subheading: oneOfType([object, string]),
    rightColumnContent: oneOfType([object, string]),
    withAnimation: bool,
    negativeMargin: bool
}