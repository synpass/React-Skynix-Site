import React, { Component } from 'react';
import Nav from './Nav';
import { Animated } from "react-animated-css";

export default class Header extends Component {
    render() {
        return(
            <div className='header-wrapper'>
                <header className='header'>
                    <Animated animationIn="fadeIn" animationInDelay={150}>
                        <div className="header__logo">
                                <img src="/static/images/skynix_logo_2018.svg"/>
                        </div>
                    </Animated>
                    <div className='header__nav'>
                        <Nav />
                    </div>
                </header>
            </div>
        )
    }
}