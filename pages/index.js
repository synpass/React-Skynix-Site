import Page from "../components/Page";
import React, {Component} from 'react';

import ParallaxBg from "../components/background/ParallaxBg";
import Intro from "../components/home-slides/Intro";
import Solutions from "../components/home-slides/Solutions"
import WhySkynix from "../components/home-slides/WhySkynix";
import Numbers from "../components/home-slides/Numbers";
import Projects from "../components/home-slides/Projects";
import FooterFixed from "../components/footer/FooterFixed";
import Reviews from "../components/footer/Reviews";
import meta from './index-meta.config.json';
import Fullpage from "../components/fullpage/Fullpage";
import Service from "../components/resources/service";
import Resources from "./resources";
import url from '../domain.config'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parallaxBg: true,
            parallaxBgTop: 0,
            rendered: props.rendered
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
        const { parallaxBg } = this.state;
        const { scrollY, screen } = window;
        const { offsetTop: componentOffsetTop } =  this.bgRef.current;

        const windowScroll = scrollY + screen.height / 2;
        const received = windowScroll > componentOffsetTop;

        if (received && parallaxBg) this.setState({parallaxBg: false});
        if (!received && !parallaxBg) this.setState({parallaxBg: true});
    }

    render() {
        const { parallaxBg, rendered } = this.state;

        return (
            <Page loading={!rendered} meta={meta} canonical={url} animate={true} newsItems={this.props.newsItems|| this.props.news} showLoader={this.props.showLoader}>
                <ParallaxBg show={parallaxBg}/>
                <Fullpage>
                    <Intro/>
                    <Solutions/>
                    <div ref={this.bgRef}>
                        <WhySkynix/>
                        <Numbers heading="in numbers" about="DON'T JUST TAKE OUR WORD FOR IT" config="numbers"/>
                        <Projects/>
                        <Reviews/>
                    </div>
                </Fullpage>
                <FooterFixed/>
            </Page>
        )
    }
}
