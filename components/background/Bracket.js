import React from 'react';
import PropTypes from 'prop-types';
import config from './bg.config.json';
import ParallaxWrapper from "./ParallaxWrapper";
import shortid from 'shortid'

export default function Bracket(props){
    const {className, length, type, parallax} = props;
    const mappingArray = new Array(length).fill(0);

    let classes = ["slide", "slide-bracket"];
    if (className) classes.push(className);

    let bracketSet = mappingArray.map((e, i) => { return (
        <div data-depth={(i + 1) * 0.1} className={classes.concat(['slide-' + i]).join(' ')} key={shortid.generate()}>
            <img src={'/static/images/' + config[type]}/>
        </div>
    ) });

    return ( parallax ? <ParallaxWrapper children={ bracketSet } /> : <div> {bracketSet} </div> );
}

Bracket.propTypes = {
    className: PropTypes.string,
    length: PropTypes.number,
    parallax: PropTypes.bool,
    type: PropTypes.oneOf(Object.keys(config))
};

Bracket.defaultProps = {
    length: 6,
    parallax: false,
    type: Object.keys(config)[0]
};