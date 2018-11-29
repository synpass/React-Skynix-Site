import React, { Component } from 'react';
import {Animated} from "react-animated-css";

export function WhySkynixPoint(props) {

    const animation = {
        animationIn: 'fadeInUp',
        animationInDelay: props.id * 350,
        className: 'why-skynix-point',
        isVisible: props.show
    };

    return (
        <Animated {...animation}>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </Animated>
    )
}