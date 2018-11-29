import React, { Component } from 'react';
import config from './configs/solutions.config.json';
import {Animated} from "react-animated-css";
import LazyLoad from "../LazyLoad";
import SolutionItem from "./SolutionsItem";
import shortid from 'shortid'

export default class Solutions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    onLoad() {
        this.setState({show: true});
    }

    render() {
        const SolutionItems = config.map((solution, i) => {
            return (
               <SolutionItem
                   num={i}
                   key={i}
                   {...solution}
                   {...this.state}
               />
            )
        });

        const lazyLoadProps = {
            className: 'solutions-wrapper',
            animationIn: 'fadeIn',
            animationInDelay: 700,
        };

        return (
            <LazyLoad {...lazyLoadProps} onLoad={this.onLoad.bind(this)}>
                <div className='solutions'>
                    <div className='solutions__heading'>
                        <h1 className='heading'><b>skynix</b> solutions </h1>
                        <h5 className='heading__sub'>WHAT WE DO</h5>
                    </div>
                    <div className='solutions__content'>
                        {SolutionItems}
                    </div>
                    <a href="/" className="solutions__link">learn about the technologies we master</a>
                </div>
            </LazyLoad>
        )
    }
}
