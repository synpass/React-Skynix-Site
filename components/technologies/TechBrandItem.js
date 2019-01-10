import React from 'react';
import { Animated } from "react-animated-css";
import PropTypes from 'prop-types';
import brands from './configs/back-brands.config.json';
import BrandItem from "../e-commerce/BrandItem";

export default function TechBrandItem() {
    return (
        <React.Fragment>
            {brands.map(brand => <BrandItem {...brand} key={brand.id}/>)}
        </React.Fragment>
    )
}
