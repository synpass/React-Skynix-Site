import React, {Component} from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Link from 'next/link';

export default function Submenu(props) {
    const { children, height } = props;
    return (
        <AnimateHeight duration={500} height={height} className="nav__submenu">
            {children.map((item) =>
                <Link key={shortid.generate()} href={item.link}><a className='nav-link nav-link--submenu'>{item.name}</a></Link>
            )}
        </AnimateHeight>
    )
}

Submenu.propTypes = {
    children: PropTypes.array,
    height: PropTypes.oneOfType([
    	PropTypes.string,
		PropTypes.number,
	])
};