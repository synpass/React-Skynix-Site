import React from 'react';
import LazyLoad from "../LazyLoad";

export default function DataMigration() {
    return (
        <LazyLoad className='ec-datamigration' id='ecDatamigration' animationIn='fadeInUp'>
            <h2 className='section-heading'>Data Migration<br />
            & Product Structuring</h2>
            <div className='ec-datamigration__container'>
                <div>
                    <h4 className='paragraph paragraph--large'>
                        Upgrade your old platform to a more powerful one without
                        losing any valuable customer data and search engine
                        reputation collected over the years
                    </h4>
                    <h4 className='paragraph paragraph--large ec-datamigration__disable-line'>
                        Improve site usability and conversion level by creating
                        a working catalog and product page structure
                    </h4>
                </div>
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
            </div>
        </LazyLoad>
    )
}