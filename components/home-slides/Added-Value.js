import React, {Component} from 'react';
import values from './configs/added-value.config.json';
import LazyLoad from "../LazyLoad";
import {AddedValuePoint} from "./Added-Value-Point";

export default class AddedValue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    onLoad = () => this.setState({show: true});

    render() {
        const lazyLoadProps = {
            className: 'why-skynix-values',
            animationIn: 'fadeIn',
            animationInDelay: 700
        };

        let col1 = values.map(value => <AddedValuePoint {...value} key={value.id} show={this.state.show}/>);
        let col2 = col1.splice(0, Math.ceil(col1.length / 2));


        return (
            <LazyLoad {...lazyLoadProps} onLoad={this.onLoad}>
                <h2>Added Value</h2>

                <div className='why-skynix-values__cols'>
                    <section>{col2}</section>
                    <section>{col1}</section>
                </div>

            </LazyLoad>
        )
    }
}
