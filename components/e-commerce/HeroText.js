import React from 'react';
import {Animated} from "react-animated-css";
import Particle from "../Particle";

export default function HeroText(props) {
    const animation = {
        animationIn: 'fadeIn',
        animationInDelay: 500
    };
    return (
        <Animated {...animation}>
            <div className='ec-rate' id='ecRate'>
                <h2 className='heading'> {props.heading} </h2>
                <h4 className='paragraph'>
                    {props.paragraph}
                </h4>
                <div className='ec-rate__particle'>
                    <Particle/>
                </div>
            </div>
        </Animated>
    )
}
