import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import TextLoop from "react-text-loop";

export default function TitleHeader() {
    const animation = {
        animationIn: 'fadeIn',
        animationInDelay: 400
    };
    return(
        <Animated {...animation}>
            <div className='ec-titleheader'>
                <h1 className='heading ec-titleheader__heading'><b>skynix</b> technology stack</h1>
                <h2 className='heading__sub'>
                    <TextLoop>
                            <span className='heading__sub-item'>hands-on experience</span>
                            <span className='heading__sub-item'>latest technologies </span>
                            <span className='heading__sub-item'>proven frameworks</span>
                            <span className='heading__sub-item'>all time favorite platforms</span>
                    </TextLoop>
                </h2>
            </div>
        </Animated>
        )
    }
