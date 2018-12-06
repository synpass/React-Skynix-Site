import Page from "../components/Page";
import React, {Component} from 'react';

import ParallaxBg from "../components/background/ParallaxBg";
import Intro from "../components/home-slides/Intro";
import Solutions from "../components/home-slides/Solutions"
import WhySkynix from "../components/home-slides/WhySkynix";
import Numbers from "../components/home-slides/Numbers";
import Projects from "../components/home-slides/Projects";
import ContactBlock from "../components/contact/ContactBlock";
import FooterFixed from "../components/footer/FooterFixed";
import Reviews from "../components/footer/Reviews";

import meta from './index-meta.config.json';


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parallaxBg: true,
            parallaxBgTop: 0
        };
        this.bgRef = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const componentOffsetTop = this.bgRef.current.offsetTop;
        const windowScroll = window.scrollY + window.screen.height / 2;
        const received = windowScroll > componentOffsetTop;

        if (received && this.state.parallaxBg) {
            this.setState({parallaxBg: false});
        }
        if (!received && !this.state.parallaxBg) {
            this.setState({parallaxBg: true})
        }
    }

    render() {
        return (
            <Page loading={true} meta={meta}>
                <ParallaxBg show={this.state.parallaxBg}/>
                <Intro/>
                <Solutions/>
                <div ref={this.bgRef}>
                    <WhySkynix/>
                </div>
                <Numbers/>
                <Projects/>
                <Reviews/>
                <ContactBlock/>
                <FooterFixed/>
            </Page>
        )
    }


}