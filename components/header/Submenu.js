import React, {Component} from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';

export default function Submenu(props) {
    const { children, height } = props;
    return (
        <AnimateHeight duration={500} height={height} className="nav__submenu">
            {children.map((item) => <a className='nav-link nav-link--submenu'>{item.name}</a>)}
        </AnimateHeight>
    )
}

Submenu.propTypes = {
    children: PropTypes.element.isRequired,
    height: PropTypes.number || PropTypes.string
};