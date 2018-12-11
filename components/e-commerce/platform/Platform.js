import React from 'react';
import LazyLoad from "../../LazyLoad";
import PlatformParallax from "./PlatformParallax";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Platform() {
    return (
        <ParallaxProvider>
            <LazyLoad className='platform'>
                <h3 className='section-heading'>Platform Customization and Integration</h3>
                <h4 className='paragraph paragraph--large'>Merge and manage all your systems and tools
                    conveniently from one, single interface</h4>
                <p className='paragraph paragraph--simple'>Skynix provides custom e-store tuning and takes on the creation of new modules
                    tailored specifically to your business strategy</p>
                <PlatformParallax/>
            </LazyLoad>
        </ParallaxProvider>
    )
}