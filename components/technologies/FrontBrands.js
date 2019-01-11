import React, {Component} from 'react';
import LazyLoad from "../LazyLoad";
import { Animated } from "react-animated-css";
import brands from './configs/front-brands.config.json';
import FrontBrandItem from "./FrontBrandItem";

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
            <LazyLoad className='ec-brands ec-brands-pos0 ec-brands-pos1 tech__block-pos3' onLoad={this.onLoad}>
                <div className='ec-brands__row ec-brands__row-reverse'>
                    <FrontBrandItem/>
                </div>
            </LazyLoad>
        )
    }
}