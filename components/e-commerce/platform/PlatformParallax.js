import React from 'react';
import images from '../configs/smartphones.config.json';
import PlatformParallaxSlide from "./PlatformParallaxItem";

export default function PlatformParallax () {
    return (
        <div className='platform-parallax'>
            {images.map(e => <PlatformParallaxSlide {...e} />)}
        </div>
    )
}