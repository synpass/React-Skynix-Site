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
        return from.map((e, i) => perc * e + (to[i] - e) - (e * 1.8 * (1 - perc))).join(', ');
    }

    getTitleStyles(perc) {
        const fromColor = [213,187,34];
        const toColor = [247,247,247];

        return {
            color: `rgb(${this.getColor(perc, fromColor, toColor)})`,
            fontSize: 140 * perc + 60 - 275 * (1 - perc)
        }
    }

    getScrollOpacity(perc) {
        // How fast opacity tends to zero;
        const sensitivity = 30;
        //How opacity changes depending on percentage; 0.7 is a beginning delta, percentage is not zero at the beginning of scroll;
        const dependency = 1 - (perc - 0.7);
        const opacity = Math.pow(dependency, sensitivity);
        return {opacity};
    }

    render() {

        const { isMobile } = this.state;

        return (
            <Animated className='ec-intro' animationIn='fadeIn' animationInDelay={500}>
                <Parallax 
                    bgImage={'blue'} 
                    strength={100} 
                    className='ec-intro__parallax' 
                    renderLayer={perc => (
                    <Sticky
                        parent='ecRate'
                        className='ec-intro__parallax-text'
                        offset={210}
                    >
                        <h1   style={isMobile ? {} : this.getTitleStyles(perc)}>e-commerce</h1>
                        <span style={isMobile ? {} : this.getScrollOpacity(perc)}>Scroll to navigate <i className='scroll-arrow'/></span>

                    </Sticky>
                )}>
                    <div className='ec-intro__parallax-content'/>
                </Parallax>
            </Animated>
        )
    }
}