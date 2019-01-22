import React from 'react';
import { Animated } from "react-animated-css";
import PropTypes from 'prop-types';

export function NumberItem(props) {
    const animation = {
        animationInDelay: props.id * 150,
        isVisible: props.show,
        className: 'section'
    };

    return (
        <Animated {...animation}>
            <h4 className={props.textSize}>{props.value}</h4>
            <span>{props.text}</span>
        </Animated>
    )
}

NumberItem.propTypes = {
    show: PropTypes.bool,
    id: PropTypes.number.isRequired,
    value: PropTypes.string,
    text:  PropTypes.string
};
