import React from 'react';
import {Animated} from "react-animated-css";
import Particle from "../Particle";

export default function Rate() {
    const animation = {
        animationIn: 'fadeIn',
        animationInDelay: 500
    };
    return (
        <Animated {...animation}>
            <div className='ec-rate' id='ecRate'>
                <h2 className='heading'>first-rate <b>e-commerce</b><br/> web development services</h2>
                <h4 className='paragraph'>
                    Whether you need to start an e-store from scratch or to extend functionality of an existing one, you
                    are in the right place. Skynix is an <b>e-commerce development company</b>, specialised in Magento
                    and Woocommerce platforms
                </h4>
                <div className='ec-rate__particle'>
                    <Particle/>
                </div>
            </div>
        </Animated>
    )
}
