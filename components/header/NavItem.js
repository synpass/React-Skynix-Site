import React, {Component} from 'react';
import Submenu from "./Submenu";
import PropTypes from 'prop-types';
import { Animated } from "react-animated-css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';

export default class NavItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0,
        };

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    /* Show / Hide are used only for desktop version */
    show() {
        if(window.innerWidth >= 768) this.setState({height: 'auto'});
    }

    hide() {
        if(window.innerWidth >= 768) this.setState({height: 0});
    };

    /* Toggle is used only for mobile version */
    toggle() {
        const height = this.state.height === 0 ? 'auto' : 0;
        this.setState({height});
    }

    render() {
        const { 
            children, 
            name, 
            contrast, 
            order,
            link,
            anchor
        } = this.props;

        const { height } = this.state;

        let linkClasses = ["nav-link"];
        if(children) linkClasses.push("parent");
        if(contrast) linkClasses.push(linkClasses[0] + "--contrast");

        let expandClasses = ["expand"];
        if(height === 'auto') expandClasses.push("opened");

        return (
            <li onMouseLeave={this.hide} onMouseEnter={this.show}>
                { anchor ? 
                    <AnchorLink className={linkClasses.join(' ')} offset='-150' href={link}>{name}</AnchorLink> :
                    <Link href={link}>
                        <a className={linkClasses.join(' ')}>{name} { children ? <span/> : null}</a>
                     </Link>
                }
                { children ? <button className={expandClasses.join(' ')} onClick={this.toggle}/> : null }
                { children ? <Submenu children={children} height={height}/> : null }
            </li>
        )
    }
}

NavItem.propTypes = {
    children: PropTypes.array,
    name: PropTypes.string.isRequired,
    contrast: PropTypes.bool,
    order: PropTypes.number.isRequired,
    anchor: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    link: PropTypes.string
};

NavItem.defaultProps = {
    anchor: false,
    link: ""
};