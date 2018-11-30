import React from 'react';
import PropTypes from 'prop-types';
import ParallaxWrapper from "./ParallaxWrapper";
import shortid from 'shortid'

export default function CirclesBg(props){
    const {className, length, parallax} = props;
    /* Fill array with values for working with map function */
    const mappingArray = new Array(length).fill(0);

    let classes = ["slide-circle"];
    if (className) classes.push(className);

    let circlesSet = mappingArray.map((e, i) => {
        return (
            <div data-depth={(i + 1) * 0.1} //Parallax property
                 className={classes.concat(['slide-circle-' + i]).join(' ')}
                 key={shortid.generate()}>
                <img src='/static/images/circle.svg'/>
            </div>
        );
    });

    return ( parallax ? <ParallaxWrapper children={ circlesSet } /> : <div> {circlesSet} </div> );
}

CirclesBg.propTypes = {
    className: PropTypes.string,
    length: PropTypes.number,
    parallax: PropTypes.bool,
};

CirclesBg.defaultProps = {
    length: 12,
    parallax: true,
    type: Object.keys(config)[0]
};