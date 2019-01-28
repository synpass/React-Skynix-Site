import React, {Component} from 'react';
import Nav from './Nav';
import {Animated} from 'react-animated-css';
import Link from 'next/link';
import {connect} from "react-redux"

 class Header extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'headerAnimation', payload: false})
    }

    render() {
        return (
            <div className='header-wrapper'>
                    <header className='header'>
                        <Animated animationIn={this.props.headerAnimation ? 'fadeInDown' : ''}>
                            <div className='header__logo'>
                                <Link href='/'>
                                    <a><img src='/static/images/skynix_logo_2018.svg' alt='Skynix LLC logo'/></a>
                                </Link>
                            </div>
                        </Animated>
                        <div className='header__nav'>
                            <Nav/>
                        </div>
                    </header>
            </div>
        )
    }
}

export default connect(state => state)(Header);