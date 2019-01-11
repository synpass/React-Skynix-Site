import React from 'react';
import LazyLoad from "../LazyLoad";
import { Animated } from 'react-animated-css';

export default function OfflineCommerce() {
    return (
        <LazyLoad className='ec-offlinecommerce'>
            <h2 className='section-heading'>Offline Commerce Integration</h2>
            <h4 className='paragraph ec-offlinecommerce__paragraph'>Digitalize your physical store and control sales and inventories
            without any paperwork, from anywhere in the world</h4>
            <div className="ec-offlinecommerce__circle" />
            <div className="ec-offlinecommerce__cart" />
            <div className="ec-offlinecommerce__home" />
            <div className="ec-offlinecommerce__padding-bottom" />
        </LazyLoad>
    )
}
