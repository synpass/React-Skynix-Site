import React, { Component } from 'react';
import shortid from 'shortid'
import config from './configs/nav.config.json';
import NavItem from './NavItem';
import { Animated } from "react-animated-css";
import {connect} from "react-redux";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { mobileMenu: false, };
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    toggleMobileMenu() {
        this.setState({mobileMenu: !this.state.mobileMenu});
    }

    render() {
        const { mobileMenu } = this.state;
        const navItems = config.map((item, i) =>
            <NavItem {...item} key={shortid.generate()} order={i} toggleMobileMenu={this.toggleMobileMenu} />
        );

        let styles = ( <style global jsx>{` html { overflow: visible;} `}</style>);

        let menuClassName = ["nav__menu"],
            burgerClassName = ["burger"],
            overlayClassName = ["header__overlay"];

        if (mobileMenu) {
            menuClassName.push("opened");
            burgerClassName.push("opened");
            overlayClassName.push("opened");
            styles = ( <style global jsx>{` html { overflow: hidden;} `}</style>);
        }

        return (
            <nav className="nav">
                <Animated animationIn={this.props.headerAnimation ? 'fadeInDowCustom' : ''} animationInDelay={400}>
                    <ul className={menuClassName.join(" ")}>{navItems}</ul>
                    <button className={burgerClassName.join(" ")} onClick={this.toggleMobileMenu}>
                        <span/><span/><span/>
                    </button>
                </Animated>
                <div className={overlayClassName.join(" ")}  onClick={this.toggleMobileMenu} />
                {styles}
            </nav>
        )
    }
}

export default connect(state => state)(Nav);