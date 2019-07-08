import React from 'react';
import LazyLoad from "../../LazyLoad";
import PlatformParallax from "./PlatformParallax";
import { ParallaxProvider } from 'react-scroll-parallax';
import AnimatedList from '../../AnimatedList';
import { oneOfType, object, string, bool } from 'prop-types';

export default function Platform(props) {
    return (
        <ParallaxProvider>
            <LazyLoad className='platform'>
                <h3 className='section-heading'> {props.heading} </h3>
                <h4 className='paragraph paragraph--large'> {props.subheadning} </h4>
                <p className='paragraph paragraph--inline-block paragraph--simple'> {props.paragraph} </p>
                
                {props.parallax && <PlatformParallax/>}
                {props.animatedList && <AnimatedList list={props.listData}/>}
            </LazyLoad>
        </ParallaxProvider>
    )
}

Platform.propTypes = {
    heading: oneOfType([object, string]),
    subheadning: oneOfType([object, string]),
    parallax: bool,
    animatedList: bool
}