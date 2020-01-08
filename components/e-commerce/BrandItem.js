import React from 'react';
import { Animated } from "react-animated-css";
import PropTypes from 'prop-types';
import Link from 'next/link';
import brands from "../technologies/configs/front-brands.config";

export default function BrandItem(props) {
    const {show, img, imgClass, id, link, linkTitle, frameworks} = props;

    return (
        <Animated className={'ec-brands__item' + (link ? "" : " brand cursor--default") + (frameworks ? " multiple" : "")}
                  isVisible={show}
                  animationInDelay={id * 250}>
            <img src={'/static/images/brands/' + img} className={imgClass}/>
            {frameworks ?
                    <ul className="ec-brands__frameworks">
                        {
                            frameworks.map((framework, i) => <li key={i} className="ec-brands__framework"><a>{framework}</a></li>)
                        }
                    </ul>
                : null}
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
    linkTitle: PropTypes.string,
    frameworks: PropTypes.array,
}
