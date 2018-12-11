import React from 'react';
import LazyLoad from "../LazyLoad";
import Particle from "../Particle";

export default function Rate() {
    return (
        <LazyLoad className='ec-rate' id='ecRate' animationIn='fadeInUp'>
            <h1 className='heading'>first-rate <b>e-commerce</b><br/> web development services</h1>
            <p className='paragraph'>
                Whether you need to start an e-store from scratch or to extend functionality of an existing one, you
                are in the right place. Skynix is an <b>e-commerce development company</b>, specialised in Magento
                and Woocommerce platforms
            </p>
            <div className='ec-rate__particle'>
                <Particle/>
            </div>
        </LazyLoad>
    )
}
