import React from 'react';
import { Animated } from "react-animated-css";
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function BrandItem(props) {
    const {show, img, imgClass, id, link, linkTitle} = props;
    return (
        <Animated className={'ec-brands__item' + (link ? "" : " brand cursor--default")} isVisible={show} animationInDelay={id * 250}>
            <img src={'/static/images/brands/' + img} className={imgClass}/> 
            { link
                ?   
                <Link href={link}>
                    <a >
                        <span>More about starting with {linkTitle}</span>
                        <img src='/static/images/arrow-blue.svg'/>
                    </a>
                </Link>
                : null
              }
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