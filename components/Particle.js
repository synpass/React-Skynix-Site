import React, { Component } from 'react';

export default class Particle extends Component {
    componentDidMount() {
        require("../static/libs/particles/RequestAnimationFrame");
        require("../static/libs/particles/stats.min");
        require("../static/libs/particles/particle");
    }

    render() {
        return (
            <div className='container-animation'/>
        )
    }
}