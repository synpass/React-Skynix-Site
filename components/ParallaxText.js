import React, {Component} from 'react';
import Sticky from '../components/Sticky';
import {Animated} from "react-animated-css";
import Plx from 'react-plx';

export default function ParallaxText(props) {

    const {children, stickyParent} = props;

    return (
        <Animated className='ec-intro' animationIn='fadeIn' animationInDelay={500}>
            <div className='ec-intro__parallax'>
                <Sticky
                    parent={stickyParent}
                    className='ec-intro__parallax-text'
                    offset={210}>

                    <Plx className='ec-intro__parallax-title' parallaxData={parallaxDataTitle}>
                        {children}
                    </Plx>

                    <Plx className='ec-intro__parallax-subtitle' parallaxData={parallaxDataSubtitle}>
                        Scroll to navigate <i className='scroll-arrow'/>
                    </Plx>

                </Sticky>
            </div>
        </Animated>
    )
}

const parallaxDataTitle = [
    {
        start: 0,
        end: 500,
        properties: [
            {
                startValue: "#223fd5",
                endValue: "#f7f7f7",
                property: "color"
            },
            {
                startValue: 1,
                endValue: 3.3,
                property: "scale"
            }
        ],
    },
    {
        start: 800,
        end: 900,
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: "opacity"
            }
        ]
    }
];

const parallaxDataSubtitle = [
    {
        start: 0,
        end: 300,
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: "opacity"
            }
        ],
    },
];