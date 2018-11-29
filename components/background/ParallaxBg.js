import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import Bracket from "./Bracket";
import PropTypes from 'prop-types';

export default function ParallaxBg(props) {

    const styles = {
        opacity: +props.show
    };

    return (
        <div className='bg' id='bg' style={styles}>
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
    show: PropTypes.bool
};