import React from 'react';
import config from './intro.config.json';
import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';

export default function Intro() {
    return (
        <div className="intro">
            <Animated animationIn="fadeIn" animationInDelay={700} className="intro__slide">
                <Animated animationIn="fadeInUp" animationInDelay={1000}>
                    <h1>{ReactHtmlParser(config.title)}</h1>
                </Animated>
            </Animated>
            <Animated animationIn="fadeIn" animationInDelay={800} className="intro__slide intro__slide--reverse">
                <Animated animationIn="fadeInUp" animationInDelay={1200}>
                    <p>{ReactHtmlParser(config.description)}</p>
                    <a href="/">let's talk</a>
                </Animated>
            </Animated>
        </div>
    )
}
