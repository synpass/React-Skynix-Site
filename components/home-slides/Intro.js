import React from 'react';
import config from './configs/intro.config.json';
import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Intro() {
    return (
        <div className="intro">
            <Animated animationIn="fadeIn" animationInDelay={700} className="intro__slide">
                <Animated animationIn="fadeInUp" animationInDelay={1000} className='intro__content'>
                    <h1>{ReactHtmlParser(config.title)}</h1>
                </Animated>
            </Animated>
            <Animated animationIn="fadeIn" animationInDelay={800} className="intro__slide intro__slide--reverse">
                <Animated animationIn="fadeInUp" animationInDelay={1200} className='intro__content intro__content--reverse'>
                    <p>{ReactHtmlParser(config.description)}</p>
                    <AnchorLink href='#contact' offset='-150'>let's talk</AnchorLink>
                </Animated>
            </Animated>
        </div>
    )
}
