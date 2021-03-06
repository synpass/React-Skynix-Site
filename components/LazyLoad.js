import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated} from "react-animated-css";

export default class LazyLoad extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
        this.lazyRef = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
        this.loadSection = this.loadSection.bind(this);
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if(this.lazyRef.current) {
            const componentOffsetTop = this.lazyRef.current.offsetTop;
            const baseHeight = window.scrollY + window.screen.height / 2;
            if (baseHeight > componentOffsetTop) {
                this.loadSection();
                window.removeEventListener('scroll', this.handleScroll);
            }
        }
    };

    loadSection() {
        if(!this.state.show) {
            this.setState({show: true});
            this.props.onLoad();
        }
    };

    render() {
        if (this.props.firstDownload === true) {
            this.state = {show: true}
        }
        return(
            <div ref={this.lazyRef} id={this.props.id}>
                <Animated {...this.props} isVisible={this.state.show}/>
            </div>
        )
    }
}

LazyLoad.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    onLoad: PropTypes.func,
    animationIn: PropTypes.string,
    animationInDelay: PropTypes.number,
    firstDownload: PropTypes.bool
};

LazyLoad.defaultProps = {
    onLoad: () => {},
};