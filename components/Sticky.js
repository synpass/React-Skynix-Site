import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Sticky extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sticky: false,
            limitTop: null,
            initialOffset: 0
        };
        this.initialState = this.state;
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
        const { parent, offset } = this.props;
        const { initialOffset, limitTop } = this.state;
        const { innerWidth, scrollY } = window;

        if (innerWidth >= 768) {
            const parentTop = document.getElementById(parent).offsetTop;
            const stickyMaxTop = parentTop + offset;
            const isSticky = initialOffset + scrollY >= stickyMaxTop;

            this.setState({sticky: isSticky});
            if (!limitTop) this.setState({limitTop: stickyMaxTop });
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

Sticky.propTypes = {
    styles: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.element
    ]),
    className: PropTypes.string,
    offset: PropTypes.number,
    parent: PropTypes.string,
};

Sticky.defaultProps = {
    className: '',
    styles: {},
    offset: 0
}