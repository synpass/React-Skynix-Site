import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import PropTypes from 'prop-types';

export function WhySkynixPoint(props) {

    const animation = {
        animationIn: 'fadeInUp',
        animationInDelay: props.id * 350,
        className: 'why-skynix-point',
        isVisible: props.show
    };

    return (
        <Animated {...animation}>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </Animated>
    )
}

WhySkynixPoint.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    show: PropTypes.bool,
};

WhySkynixPoint.defaultProps = {
    show: true
};