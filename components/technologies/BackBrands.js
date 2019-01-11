import React, {Component} from 'react';
import LazyLoad from "../LazyLoad";
import { Animated } from "react-animated-css";
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
                <div className='ec-brands__row tech__block-pos1 tech__block-nohover'>
                  <TechBrandItem/>
                </div>
            </LazyLoad>
        )
    }
}