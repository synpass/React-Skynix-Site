import React from 'react';
import {Animated} from "react-animated-css";
import Particle from "../Particle";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function TitleHeader() {
    const animation = {
        animationIn: 'fadeInDown',
        animationInDelay: 400
    };
    return (
    <Animated {...animation}>
        <div className='ec-titleheader'>
            <h1 className='heading ec-titleheader__heading'><b>skynix</b> technology stack</h1>
            <h2 className='heading__sub heading__sub-line'>
                    <span className='heading__sub-item'>hands-on experience</span>
                    <span className='heading__sub-item'>latest technologies </span>
                    <span className='heading__sub-item'>proven frameworks</span>
                    <span className='heading__sub-item'>all time favorite platforms</span>
            </h2>
        </div>
    </Animated>
    )
}
