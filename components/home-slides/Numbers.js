import React, { Component } from 'react';
import numbers from './configs/skynix-in-numbers.config.json';
import LazyLoad from "../LazyLoad";
import {NumberItem} from "./NumberItem";

export default class Numbers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.onLoad = this.onLoad.bind(this);
    }

    onLoad() {
        this.setState({show: true});
    }

    render() {
        const lazyLoadProps = {
            className: 'numbers',
            animationIn: 'fadeIn',
            animationInDelay: 0
        };
        return (
            <LazyLoad {...lazyLoadProps} onLoad={this.onLoad}>
                <div className='numbers__heading'>
                    <h1 className='heading'><b>skynix</b> in numbers </h1>
                    <h5 className='heading__sub'>DON'T JUST TAKE OUR WORD FOR IT</h5>
                </div>

                <div className='numbers__grid'>
                    {numbers.map(num =>
                        <NumberItem {...num} key={num.id} show={this.state.show}/>
                    )}
                </div>
            </LazyLoad>
        )
    }
}
