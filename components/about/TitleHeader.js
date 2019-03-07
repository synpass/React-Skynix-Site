import React, {Component} from 'react';
import {Animated} from "react-animated-css";

export default function TitleHeader() {
    const animation = {
        animationIn: 'fadeIn',
        animationInDelay: 400
    };
    return(
        <Animated {...animation}>
            <div className='ec-titleheader'>
                <h1 className='heading ec-titleheader__heading'>about <b>skynix</b></h1>
            </div>
        </Animated>
        )
    }
