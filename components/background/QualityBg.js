import React from 'react';
import PropTypes from 'prop-types';
import ParallaxWrapper from "./ParallaxWrapper";
import shortid from 'shortid'

export default function QualityBg(props){
    const {className, length, parallax} = props;
    /* Fill array with values for working with map function */
    const mappingArray = new Array(length).fill(0);

    let classes = ["slide"];
    if (className) classes.push(className);

    let QualitySet = mappingArray.map((e, i) => {
        return (
            <div data-depth={(i + 1) * 0.125} //Parallax property
                 className={classes.concat(['slide-' + i]).join(' ')}
                 key={shortid.generate()}>
                <img src='/static/images/qa-bg.png'/>
            </div>
        );
    });

    return ( parallax ? <ParallaxWrapper children={ QualitySet } /> : <div> {QualitySet} </div> );
}

QualityBg.propTypes = {
    className: PropTypes.string,
    length: PropTypes.number,
    parallax: PropTypes.bool,
};

QualityBg.defaultProps = {
    length: 5,
    parallax: true,
};