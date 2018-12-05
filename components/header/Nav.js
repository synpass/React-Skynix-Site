import React, { Component } from 'react';
import shortid from 'shortid'
import headerConfig from './configs/top-nav.config.json';
import footerConfig from './configs/bottom-nav.config.json';
import NavItem from './NavItem';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { mobileMenu: false };
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    toggleMobileMenu() {
        this.setState({mobileMenu: !this.state.mobileMenu});
    }

    render() {
        const { mobileMenu } = this.state;
        const { isFooter } = this.props;
        const config = isFooter ? footerConfig : headerConfig;

        const navItems = config.map((item, i) =>
            <NavItem {...item} key={shortid.generate()} order={i}/>
        );

        let navClassName = ["nav"],
            menuClassName = ["nav__menu"],
            burgerClassName = ["burger"];

        if (isFooter) {
            navClassName.push('nav--bottom');
        }
        if (mobileMenu) {
            menuClassName.push("opened");
            burgerClassName.push("opened");
        }

        return (
            <nav className={navClassName}>
                <ul className={menuClassName.join(" ")}>{navItems}</ul>
                <button className={burgerClassName.join(" ")} onClick={this.toggleMobileMenu}>
                    <span/><span/><span/>
                </button>
            </nav>
        )
    }
}