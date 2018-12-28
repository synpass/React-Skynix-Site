import React, {Component} from 'react';
import '../static/scss/app.scss';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Footer from './footer/Footer';
import {Animated} from "react-animated-css";
import ParallaxSlide from "./ParallaxSlide";
import ContactBlock from "../components/contact/ContactBlock";

import Meta from "./Meta";
import Head from 'next/head'

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preload: false,
            loaded: !props.loading,
            footerLoaded: false
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

    footerLoaded = () => this.setState({footerLoaded: true});

    render() {
        const {children, className, meta, animate, isLoaded} = this.props;

        const {loaded, preload, footerLoaded} = this.state;

        const content = (
            <div className="content__adaptive">
                <div>
                    <div className="content-wrapper">
                        <div className="content">
                            {children}
                        </div>
                    </div>
                    <ContactBlock/>
                    <Footer onLoad={this.footerLoaded} page={1}/>
                    <Header/>
                </div>
            </div>
        );

        return (
            <div className={className}>
                <Head>
                    <meta name="robots" content="noindex, nofollow"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"/>
                    <link rel="stylesheet" href="owl-carousel/owl.theme.css"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="../static/images/favicon/apple-touch-icon-57x57.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../static/images/favicon/apple-touch-icon-114x114.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../static/images/favicon/apple-touch-icon-72x72.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../static/images/favicon/apple-touch-icon-144x144.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="../static/images/favicon/apple-touch-icon-60x60.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="../static/images/favicon/apple-touch-icon-120x120.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="../static/images/favicon/apple-touch-icon-76x76.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="../static/images/favicon/apple-touch-icon-152x152.png" />
                    <link rel="icon" type="image/png" href="../static/images/favicon/favicon-196x196.png" sizes="196x196" />
                    <link rel="icon" type="image/png" href="../static/images/favicon/favicon-96x96.png" sizes="96x96" />
                    <link rel="icon" type="image/png" href="../static/images/favicon/favicon-32x32.png" sizes="32x32" />
                    <link rel="icon" type="image/png" href="../static/images/favicon/favicon-16x16.png" sizes="16x16" />
                    <link rel="icon" type="image/png" href="../static/images/favicon/favicon-128.png" sizes="128x128" />
                    <meta name="application-name" content="&nbsp;"/>
                    <meta name="msapplication-TileColor" content="#FFFFFF" />
                    <meta name="msapplication-TileImage" content="mstile-144x144.png" />
                    <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
                    <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
                    <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
                    <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

                </Head>
                <Meta {...meta}/>
                <div style={{display: loaded && isLoaded && footerLoaded? 'block' : 'none'}}>
                    {content}
                </div>

                <div style={{display: loaded && isLoaded && footerLoaded ? 'none' : 'block'}}>
                    <ParallaxSlide loaded={preload} animate={animate}/>
                </div>
            </div>
        )
    }
}

Page.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    className: PropTypes.string,
    meta: PropTypes.object,
    animate: PropTypes.bool,
    isLoaded: PropTypes.bool
};

Page.defaultProps = {
    animate: false,
    isLoaded: true
};