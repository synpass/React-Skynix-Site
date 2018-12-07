import React from 'react';
import { Animated } from "react-animated-css";
import PropTypes from 'prop-types';

export default function BrandItem(props) {
    const {show, img, imgClass, id, link, linkTitle} = props;
    return (
        <Animated className='ec-brands__item' isVisible={show} animationInDelay={id * 250}>
            <img src={'/static/images/brands/' + img} className={imgClass}/>
            <a href={link}>
                <span>More about staging with {linkTitle}</span>
                <img src='/static/images/arrow-blue.svg'/>
            </a>
        </Animated>
    )
}

BrandItem.propTypes = {
    show: PropTypes.bool,
    img: PropTypes.string,
    imgClass: PropTypes.string,
    id: PropTypes.number.isRequired,
    link: PropTypes.string,
    linkTitle: PropTypes.string
}