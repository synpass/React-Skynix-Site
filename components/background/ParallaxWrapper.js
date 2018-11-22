import React, {Component} from 'react';
import Parallax from 'parallax-js';

export default class ParallaxWrapper extends Component {
    componentDidMount() {
        this.parallax = new Parallax(this.scene)
    }

    componentWillUnmount() {
        this.parallax.disable()
    }

    render() {
        return (
            <div ref={el => this.scene = el}>
                {this.props.children}
            </div>
        )
    }
}