import React, {Component} from 'react';
import LazyLoad from "../LazyLoad";
import { Animated } from "react-animated-css";
import BrandItem from "./BrandItem";

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
            <LazyLoad className='ec-brands' onLoad={this.onLoad}>
                <div className='ec-brands__row'>
                    {this.props.brands.map(brand => <BrandItem {...brand} show={this.state.show} key={brand.id}/>)}
                </div>
            </LazyLoad>
        )
    }
}