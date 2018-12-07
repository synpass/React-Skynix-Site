import React, {Component} from 'react';
import '../static/scss/app.scss';
import Head from 'next/head'
import PropTypes from 'prop-types';
import Header from './header/Header';
import Footer from './footer/Footer';
import {Animated} from "react-animated-css";
import ParallaxSlide from "./ParallaxSlide";
import Meta from "./Meta";

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
        const {children, className, meta, animate} = this.props;
        const {loaded, preload} = this.state;

        const content = (
            <div>
                <div className="content-wrapper">
                    <div className="content">
                        {children}
                    </div>
                </div>
                <Footer/>
                <Header/>
            </div>
        );

        return (
            <div className={className}>
                <Head>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"/>
                    <link rel="stylesheet" href="owl-carousel/owl.theme.css"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                <Meta {...meta}/>
                <div style={{display: loaded ? 'block' : 'none'}}>
                    {content}
                </div>

                <div style={{display: loaded ? 'none' : 'block'}}>
                    <ParallaxSlide loaded={preload} animate={animate}/>
                </div>
            </div>
        )
    }
}

Page.propTypes = {
    children: PropTypes.array,
    className: PropTypes.string,
    meta: PropTypes.object,
    animate: PropTypes.bool
};

Page.defaultProps = {
    animate: false
};