import React, { Component } from 'react';
import config from './configs/solutions.config.json';
import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';

export default class Solutions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            move: false
        };
    }

    /* Animate slide only once */
    componentWillReceiveProps(nextProps) {
        if (nextProps.show) {
            this.setState({animate: true});
            setTimeout(() => this.setState({move: true}), 1700)
        }
    }


    render() {

        const SolutionItems = config.map((solution, i) => {
            const delay = 800 + i * 250;

            let classes = ['solutions__article'];
            if (this.state.move) classes.push('move');

            return (
                <a href='/' className={classes.join(' ')}>
                    <Animated animationIn="fadeIn" animationInDelay={delay} isVisible={this.state.animate}>
                        <h2><sup>0{i + 1}</sup>{solution.name}</h2>
                        <p>{ReactHtmlParser(solution.description)}</p>
                    </Animated>
                </a>
            )
        });

        return (
            <Animated animationIn="fadeIn" animationInDelay={700} className='solutions' isVisible={this.state.animate}>
                <div className='solutions__heading'>
                    <h1 className='heading'><b>skynix</b> solutions </h1>
                    <h5 className='heading__sub'>WHAT WE DO</h5>
                </div>
                <div className='solutions__content'>
                    {SolutionItems}
                </div>
                <a href="/" className="solutions__link">learn about the technologies we master</a>
            </Animated>
        )
    }
}
