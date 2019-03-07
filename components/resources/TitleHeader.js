import React from 'react';
import {Animated} from "react-animated-css";
import Particle from "../Particle";

export default function TitleHeader() {
    const animation = {
        animationIn: 'fadeIn',
        animationInDelay: 600
    };
    return (
        <Animated {...animation}>
            <div className='ec-titleheader'>
                <h2 className='heading ec-titleheader__heading'>skynix <b>resource center</b></h2>
                <div className='ec-titleheader__particle'>
                    <Particle/>
                </div>
                <div className="ec-titleheader__padding-bottom"></div>
            </div>
        </Animated>
    )
}
