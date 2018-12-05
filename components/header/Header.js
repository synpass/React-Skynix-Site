import React, {Component} from 'react';
import Nav from './Nav';
import {Animated} from "react-animated-css";

export default function Header(props) {
    const { isFooter } = props;

    let classes = ['header'];
    let classesWrapper = ['header-wrapper'];

    if (isFooter) {
        classes.push('header--bottom');
        classesWrapper.push('header-wrapper--bottom');
    }

    return (
        <div className={classesWrapper.join(' ')}>
            <Animated animationIn="fadeInDown">
                <header className={classes.join(' ')}>
                    <div className="header__logo">
                        <img src="/static/images/skynix_logo_2018.svg"/>
                    </div>
                    <div className='header__nav'>
                        <Nav isFooter={isFooter}/>
                    </div>
                </header>
            </Animated>
        </div>
    )
}