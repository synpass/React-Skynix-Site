import React from 'react';
import { Animated } from "react-animated-css";
import PropTypes from 'prop-types';

export default function BrandItem(props) {
    const {children, show, img, imgClass, id, link, linkTitle, name} = props;
    return (
        <Animated className='ec-brands__item brand' isVisible={show} animationInDelay={id * 250}>
            <img src={'/static/images/brands/' + img} className={imgClass}/>
            { children ?
                <div className="ec-brands__item-wrap">
                    <ul>
                        { children.map((item) => 
                            <li>{item.name}</li>)
                        }
                    </ul>
                </div>
            : null }  
            { link
                ?   <a href={link}>
                        <span>More about starting with {linkTitle}</span>
                        <img src='/static/images/arrow-blue.svg'/>
                    </a>
                : null
              }
        </Animated>
    )
}

BrandItem.propTypes = {
    children: PropTypes.array,
    show: PropTypes.bool,
    img: PropTypes.string,
    imgClass: PropTypes.string,
    id: PropTypes.number.isRequired,
    link: PropTypes.string,
    linkTitle: PropTypes.string,
    name: PropTypes.string
}