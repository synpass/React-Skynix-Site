import React, {Component} from 'react';
import '../static/scss/app.scss';
import Head from 'next/head'
import PropTypes from 'prop-types';
import Header from './header/Header';
import Footer from './footer/Footer';
import ParallaxSlide from "./ParallaxSlide";
import {Animated} from "react-animated-css";

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preload: false,
            loaded: !props.loading
        };
    }

    componentDidMount() {
        setTimeout(function () {
            this.setState({preload: true})
        }.bind(this), 1100);
        setTimeout(function () {
            this.setState({loaded: true})
        }.bind(this), 3000);
    }

    render() {
        const content = (
            <div>
                <div className="content-wrapper">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
                <Footer/>
                <Header/>
            </div>
        );

        return (
            <div className={this.props.className}>
                <Head>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>

                {this.state.loaded ? content : <ParallaxSlide loaded={this.state.preload}/>}
            </div>
        )
    }
}

Page.propTypes = {
    children: PropTypes.array,
    className: PropTypes.string
};