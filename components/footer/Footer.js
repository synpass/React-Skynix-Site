import React from 'react';
import {Animated} from "react-animated-css";
import links from './social.config.json';
import shortid from 'shortid'

export default function Footer() {
    const social = Object.keys(links).map(key =>
        <a href={links[key]} key={shortid.generate()}>{key}</a>
    );

    return (
        <Animated animationIn="fadeInUp" className="footer-wrapper">
            <footer className="footer">
                <div className='footer__links'>
                    {social}
                </div>
                <div className='footer__scroll'>
                    Scroll to navigate
                </div>
            </footer>
        </Animated>
    )
}