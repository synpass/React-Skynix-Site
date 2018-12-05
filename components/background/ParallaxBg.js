import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import Bracket from "./Bracket";
import PropTypes from 'prop-types';

export default function ParallaxBg(props) {

    const {show, className, slash, style} = props;

    const styles = {
        opacity: +show,
        ...style
    };

    let classNames = ['bg'];
    if (className) classNames.push(className);

    return (
        <div className={classNames.join(' ')} id='bg' style={styles}>
            <div>
                <div className='bg__elem bg__elem--bracket move'>
                    <Bracket parallax={show}/>
                </div>
            </div>
            <div>
                <div className='bg__elem bg__elem--slash'>
                    {slash ? <Bracket parallax={show} type='slash'/> : null}
                </div>
            </div>
            <div>
                <div className='bg__elem bg__elem--bracket-reverse move'>
                    <Bracket parallax={show}/>
                </div>
            </div>
        </div>
    );
}

ParallaxBg.propTypes = {
    show: PropTypes.bool,
    className: PropTypes.string,
    slash: PropTypes.bool,
    style: PropTypes.object
};
ParallaxBg.defaultProps = {
    show: false,
    slash: false,
    style: {}
};