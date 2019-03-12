import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import PropTypes from 'prop-types';

export function WhySkynixPoint(props) {

    const animation = {
        animationIn: 'fadeIn',
        animationInDelay: props.id * 450,
        className: 'why-skynix-point',
        isVisible: props.show
    };

    return (
        <Animated {...animation}>
            <img src={'/static/images/why-skynix/' + props.img} />
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
    img: PropTypes.string
};

WhySkynixPoint.defaultProps = {
    show: true
};