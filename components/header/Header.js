import React, {Component} from 'react';
import Nav from './Nav';
import {Animated} from 'react-animated-css';

export default function Header() {
    return (
        <div className='header-wrapper'>
            <Animated animationIn='fadeInDown'>
                <header className='header'>
                    <div className='header__logo'>
                        <img src='/static/images/skynix_logo_2018.svg'/>
                    </div>
                    <div className='header__nav'>
                        <Nav/>
                    </div>
                </header>
            </Animated>
        </div>
    )
}