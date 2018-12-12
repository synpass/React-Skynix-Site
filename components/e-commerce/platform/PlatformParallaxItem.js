import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

export default function PlatformParallaxSlide(props) {
    const { img, id } = props;

    let classes = ['platform-parallax__slide'];
    classes.push(classes[0] + '--' + id);

    return (
        <Parallax
            offsetYMax={20 * id}
            offsetYMin={0}
            tag="figure"
            className={classes.join(' ')}
        >
            <img src={'/static/images/smartphones/' + img} alt='Platform Customization' />
        </Parallax>
    )
}

PlatformParallaxSlide.propTypes = {
    img: PropTypes.string,
    id: PropTypes.number.isRequired
};