import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import Bracket from "./Bracket";
import PropTypes from 'prop-types';

export default function ParallaxBg(props) {

    const styles = {
        opacity: +props.show
    };

    let classNames = ['bg'];
    if (props.className) classNames.push(props.className);

    return (
        <div className={classNames.join(' ')} id='bg' style={styles}>
            <div>
                <div className='bg__elem bg__elem--bracket move'>
                    <Bracket parallax={props.show}/>
                </div>
            </div>
            <div>
                <div className='bg__elem bg__elem--slash'/>
            </div>
            <div>
                <div className='bg__elem bg__elem--bracket-reverse move'>
                    <Bracket parallax={props.show}/>
                </div>
            </div>
        </div>
    );
}

ParallaxBg.propTypes = {
    show: PropTypes.bool,
    className: PropTypes.string
};
ParallaxBg.defaultProps = {
    show: false
};