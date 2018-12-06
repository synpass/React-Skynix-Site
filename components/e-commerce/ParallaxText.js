import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import Sticky from '../Sticky';
import {Animated} from "react-animated-css";

export default class ParallaxText extends Component {

    constructor(props) {
        super(props);
        this.state = { isMobile: false }
    }

    componentDidMount() {
        if (window.innerWidth < 768 && !this.state.isMobile) {
            this.setState({isMobile: true});
        }
    }

    getColor(perc, from, to) {
        return perc * from + (to - from) - (from * 1.8 * (1 - perc));
    }

    /* Our example: from rgb(213,186,34) to rgb(247,247,247) */
    getStyles(perc) {
        return {
            color: `rgb(${this.getColor(perc, 213, 247)}, ${this.getColor(perc, 187, 247)}, ${this.getColor(perc, 34, 247)})`,
            fontSize: 140 * perc + 60 - 140 * (1 - perc)
        }
    }

    render() {

        const { isMobile } = this.state;

        return (
            <Animated className='ec-intro' animationIn='fadeIn' animationInDelay={500}>
                <Parallax 
                    bgImage={'blue'} 
                    strength={100} 
                    className='ec-intro__parallax' 
                    renderLayer={percentage => (
                    <Sticky
                        parent='ecRate'
                        className='ec-intro__parallax-text'
                        offset={210}
                        styles={isMobile ? {} :  this.getStyles(percentage)}
                    >
                        e-commerce
                    </Sticky>
                )}>
                    <div className='ec-intro__parallax-content'/>
                </Parallax>
            </Animated>
        )
    }
}