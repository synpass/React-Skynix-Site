/*
 * todo: code style
 * todo: comments
 * todo: propTypes
 * todo: optimize variables
 * todo: add onResize listener for initial offset change (optional)
*/

import React, {Component} from 'react';

export default class Sticky extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sticky: false,
            limitTop: null,
            initialOffset: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.ref = React.createRef();
    }

    componentDidMount() {
        if(window.innerWidth >= 768) {
            this.setState({initialOffset: this.ref.current.offsetTop});
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if(window.innerWidth >= 768) {
            const parent = document.getElementById(this.props.parent);
            const componentOffsetTop = window.scrollY + this.props.offset;
            const parentOffsetTop = parent.offsetTop;


            this.setState({sticky: this.state.initialOffset + window.scrollY >= parentOffsetTop + this.props.offset});

            if (!this.state.limitTop) {
                this.setState({limitTop: parentOffsetTop + +this.props.offset });
            }
        }
    }

    render() {
        const { styles, children, className } = this.props;
        const { sticky, limitTop } = this.state;

        const style = { top: sticky ? `${limitTop}px` : '50%' };

        let classes = [className];
        if (sticky) classes.push('sticky');

        return <div className={classes.join(' ')} style={{...styles, ...style}} ref={this.ref}> {children} </div>;
    }
}
