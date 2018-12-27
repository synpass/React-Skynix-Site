import React, {Component} from 'react';
import Nav from './Nav';
import {Animated} from 'react-animated-css';
import Link from 'next/link';

export default function Header() {
    return (
        <div className='header-wrapper'>
            <Animated animationIn='fadeInDown'>
                <header className='header'>
                    <div className='header__logo'>
                        <Link href='/'>
                            <a><img src='/static/images/skynix_logo_2018.svg' alt='Skynix LLC logo' rel='canonical'/></a>
                        </Link>
                    </div>
                    <div className='header__nav'>
                        <Nav/>
                    </div>
                </header>
            </Animated>
        </div>
    )
}