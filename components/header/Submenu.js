import React, {Component} from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import shortid from 'shortid'

export default function Submenu(props) {
    const { children, height } = props;
    return (
        <AnimateHeight duration={500} height={height} className="nav__submenu">
            {children.map((item) => <a className='nav-link nav-link--submenu' key={shortid.generate()}>{item.name}</a>)}
        </AnimateHeight>
    )
}

Submenu.propTypes = {
    children: PropTypes.array,
    height: PropTypes.number || PropTypes.string
};