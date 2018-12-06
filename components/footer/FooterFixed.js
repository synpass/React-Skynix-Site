import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import links from './configs/social.config.json';
import shortid from 'shortid'

export default class FooterFixed extends Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
        this.ref = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const { show } = this.state;
        const footerTop = document.getElementById('footer').offsetTop;
        const fixedTop = this.ref.current.offsetTop + window.scrollY + window.innerHeight;
        this.setState({show: fixedTop < footerTop})
    }

    render() {
        const social = Object.keys(links).map(key =>
            <a href={links[key]} key={shortid.generate()}>{key}</a>
        );

        return (
            <Animated animationIn="fadeInUp" animationOut="fadeOutDown" className="s-footer-wrapper" isVisible={this.state.show}>
                <div className="s-footer" ref={this.ref}>
                    <div className='s-footer__links'>
                        {social}
                    </div>
                    <div className='s-footer__scroll'>
                        Scroll to navigate
                    </div>
                </div>
            </Animated>
        )
    }
}