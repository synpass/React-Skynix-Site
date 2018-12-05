/*
 * todo: code style
 * todo: comments
 * todo: optimize variables
*/

import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import Sticky from '../Sticky';
import {Animated} from "react-animated-css";

export default class ParallaxText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobile: false
        }
    }

    componentDidMount() {
        if (window.innerWidth < 768 && !this.state.isMobile) {
            this.setState({isMobile: true});
        }
    }

    render() {
        /* Our example: from rgb(213,186,34) to rgb(247,247,247) */
        const getColor = (perc, from, to) => perc * from + (to - from) - (from * 1.8 * (1 - perc));

        const setStyles = (perc) => {
            return {
                color: `rgb(${getColor(perc, 213, 247)}, ${getColor(perc, 187, 247)}, ${getColor(perc, 34, 247)})`,
                fontSize: 140 * perc + 60 - 140 * (1 - perc)
            }
        };

        return (
            <Animated className='ec-intro' animationIn='fadeIn' animationInDelay={500}>
                <Parallax bgImage={'blue'} strength={100} className='ec-intro__parallax' renderLayer={percentage => (
                    <Sticky
                        parent='ecRate'
                        className='ec-intro__parallax-text'
                        offset={210}
                        styles={!this.state.isMobile ? setStyles(percentage): {}}>e-commerce</Sticky>
                )}>
                    <div className='ec-intro__parallax-content'/>
                </Parallax>
            </Animated>
        )
    }
}