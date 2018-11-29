import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

export function AddedValuePoint(props) {
    const animation = {
        animationIn: 'fadeInUp',
        animationInDelay: props.id * 350,
        className: 'why-skynix-values__section',
        isVisible: props.show
    };

    return (
        <Animated {...animation}>
            <h4>{props.title}</h4>
            <p>{ReactHtmlParser(props.description)}</p>
        </Animated>
    )
}

AddedValuePoint.propTypes = {
    show: PropTypes.bool,
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    title:  PropTypes.string
};
