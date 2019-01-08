import React, {Component} from 'react';
import LazyLoad from "../LazyLoad";
import { Animated } from "react-animated-css";
import brands from './configs/back-brands.config.json';
import TechBrandItem from "./TechBrandItem";

export default class Brands extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
        this.onLoad = this.onLoad.bind(this);
    }

    onLoad() {
        this.setState({show: true});
    }

    render() {
        return (
            <LazyLoad className='ec-brands ec-brands__tech' onLoad={this.onLoad}>
                <div className='ec-brands__row'>
                   {brands.map(brand => <TechBrandItem {...brand} show={this.state.show} key={brand.id}/>)}
                </div>
            </LazyLoad>
        )
    }
}