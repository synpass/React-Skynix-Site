import React, {Component} from 'react';
import {Animated} from "react-animated-css";

export default function TitleHeader() {
    const animation = {
        animationIn: 'fadeInDown',
        animationInDelay: 400
    };
    return(
        <Animated {...animation}>
            <div className='ec-titleheader'>
                <h1 className='heading ec-titleheader__heading'><b>Terms</b> and Conditions</h1>
            </div>
        </Animated>
        )
    }