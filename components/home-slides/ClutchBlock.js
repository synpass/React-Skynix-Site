import React from 'react';
import LazyLoad from "../LazyLoad";
import ClutchWidget from "../Clutch";
import ParallaxBg from "../background/ParallaxBg";

export default function ClutchBlock() {
    const lazyLoadProps = {
        className: 'clutch-wrapper',
        animationInDelay: 0
    };
    return (
        <LazyLoad {...lazyLoadProps}>
            <ParallaxBg className='bg--absolute'/>
            <ClutchWidget/>
        </LazyLoad>
    )
}