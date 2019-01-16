import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import brands from "./configs/clients-brands.config.json";
import Brands from "../e-commerce/Brands";

export default function Clients() {
	return (
        <Animated  animationIn="fadeInDown" animationInDelay={400}>
            <Brands brands={brands}/>
        </Animated>
        )
    }
