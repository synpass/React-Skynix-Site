import React, { Component } from 'react';

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
        window.addEventListener('mousewheel', this.handleWheel);
    }

    componentWillUnmount() {
        window.removeEventListener('mousewheel', this.handleWheel)
    }

    finishScroll = () => this.setState({scrolling: false});

    getCurrSlide = () => document.getElementById('slide-' + this.state.currSlide);


    getSlideScroll(direction, deltaY) {
        const { offsetTop } = this.getCurrSlide();
        const { height: windowHeight } = window.screen;

        switch(direction) {
            case 'bottom':
                return  offsetTop > window.scrollY + windowHeight ;
            case 'top':
                return offsetTop <= window.scrollY
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
            setTimeout(this.finishScroll, 1800);
        }
    }

    goTo(id) {
        this.setState({
            scrolling: true,
            currSlide: id
        });
        this.scrollTo();
    }

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

function FullpageSlide(props) {
    const { id, template } = props;
    const slideId = 'slide-' + id;

    return <div id={slideId}>{template}</div>
}