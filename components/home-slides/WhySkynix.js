import React, { Component } from 'react';
import points from './configs/why-skynix.config.json';
import LazyLoad from "../LazyLoad";
import { WhySkynixPoint } from "./Why-Skynix-Point";
import AddedValue from "./Added-Value";

export default class WhySkynix extends Component {

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
            className: 'why-skynix',
            animationIn: 'fadeIn',
            animationInDelay: 700
        };

        return (
            <LazyLoad {...lazyLoadProps} onLoad={this.onLoad}>
                <div className='why-skynix__heading'>
                    <h1 className='heading'><b>why</b> skynix </h1>
                    <h5 className='heading__sub'>WHAT WORKING WITH US MEANS FOR YOU</h5>
                </div>
                <div className='why-skynix__points'>
                    {points.map(point =>
                        <WhySkynixPoint
                            {...point}
                            key={point.id}
                            show={this.state.show}
                        />)}
                </div>
                <a href='/' className='why-skynix__link'>learn about our process</a>
                <AddedValue/>
            </LazyLoad>
        )
    }
}
