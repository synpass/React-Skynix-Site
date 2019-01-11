import React, {Component} from 'react';
import LazyLoad from "../LazyLoad";
import { Animated } from "react-animated-css";
import brands from './configs/development-brands.config.json';
import BrandItem from "../e-commerce/BrandItem";

export default class DevelopmentBrands extends Component {
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
            <LazyLoad className='ec-brands' onLoad={this.onLoad}>
                <div className='ec-brands__row tech__block-nohover'>
                    {brands.map(brand => <BrandItem {...brand} show={this.state.show} key={brand.id}/>)}
                </div>
            </LazyLoad>
        )
    }
}