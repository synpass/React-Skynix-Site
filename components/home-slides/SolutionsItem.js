import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Animated } from "react-animated-css";
import PropTypes from 'prop-types';

export default class SolutionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move: false
        };
        this.moveAnimate = this.moveAnimate.bind(this);
    }

    componentDidMount() {
       this.moveAnimate();
    }

    componentDidUpdate() {
        this.moveAnimate();
    }

    moveAnimate() {
        if(this.props.show && !this.state.move) {
            setTimeout(() => this.setState({move: true}), 1700);
        }
    }

    render() {
        const {show, num, name, description} = this.props;

        let classes = ['solutions__article'];
        if (this.state.move) classes.push('move');

        return (
            <a href='/' className={classes.join(' ')}>
                <Animated animationIn="fadeIn" animationInDelay={ 800 + num * 250} isVisible={show}>
                    <h2><sup>0{num + 1}</sup>{name}</h2>
                    <p>{ReactHtmlParser(description)}</p>
                </Animated>
            </a>
        )
    }
}

SolutionItem.propTypes = {
    show: PropTypes.bool,
    num: PropTypes.number.isRequired,
    name: PropTypes.string,
    description: PropTypes.string
};

SolutionItem.defaultProps ={
    show: true
};



