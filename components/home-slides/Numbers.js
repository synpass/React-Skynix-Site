import React, { Component } from 'react';
import numbers from './configs/skynix-in-numbers.config.json';
import jobs from './configs/skynix-careers.config.json';
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

        let data;
        let fontSize;

        if(this.props.config == "numbers"){
            data = numbers;
        }else if(this.props.config == "jobs"){
            data = jobs;
            fontSize = 'numbers__heading--medium';
        }
        return (
            <LazyLoad {...lazyLoadProps} onLoad={this.onLoad}>
                <div className='numbers__heading'>
                    <h1 className='heading'><b>skynix</b>  {this.props.heading} </h1>
                    <h5 className='heading__sub'>{this.props.about}</h5>
                </div>

                <div className='numbers__grid'>
                    {data.map(num =>
                        <NumberItem {...num} key={num.id} show={this.state.show} textSize={fontSize || null}/>
                    )}
                </div>
            </LazyLoad>
        )
    }
}
