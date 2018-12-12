import React, { Component } from 'react';
import FullpageSlide from './Slide';
import PropTypes from 'prop-types';

export default class Fullpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currSlide: 0,
            scrolling: false
        };
        this.handleWheel = this.handleWheel.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    componentDidMount() {
        window.addEventListener('mousewheel', this.handleWheel, false); // Chrome/Safari/Opera
    }

    componentWillUnmount() {
        window.removeEventListener('mousewheel', this.handleWheel, false)
    }

    finishScroll = () => this.setState({scrolling: false});

    getCurrSlide = () => document.getElementById('slide-' + this.state.currSlide);


    getSlideScroll(direction) {
        const { offsetTop } = this.getCurrSlide();
        const { screen,  scrollY}  = window;
        const deltaOffset = 200; //To make less sensitivity for transitions between slides

        switch(direction) {
            case 'bottom':
                return  offsetTop > scrollY + screen.height ;
            case 'top':
                return offsetTop <= scrollY + deltaOffset;
        }
    }

    handleWheel(e) {
        const { currSlide, scrolling } = this.state;
        const { children } = this.props;

        if (scrolling) e.preventDefault();

        const isNext = e.deltaY > 0 && currSlide < children.length - 1;
        const isPrev = e.deltaY < 0 && currSlide !== 0;
        const direction = isNext ? 'bottom' : 'top';
        const shouldSlideScroll =
            (isNext || isPrev) && /* Check slides limits */
            !scrolling && /* Prevent if it is already scrolling */
            !this.getSlideScroll(direction); /* Prevent if slide has overflow area to be scrolled */

        if (shouldSlideScroll) {
            e.preventDefault();
            this.goTo(isNext ? currSlide + 1 : currSlide - 1);
            setTimeout(this.finishScroll, 1500);
        }
    }

    /* State changing (slide id & loading) */
    goTo(id) {
        this.setState({
            scrolling: true,
            currSlide: id
        });
        this.scrollTo();
    }

    /* Smooth scrolling to id in state */
    scrollTo() {
        window.scroll({
            top: this.getCurrSlide().offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }

    render() {
        const { children } = this.props;
        const slidesArray = children.map((e,i) => <FullpageSlide id={i} key={i} template={e}/>);

        return <div className='fullpage'>{slidesArray}</div>
    }
}

Fullpage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ])
};