import React, {Component} from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import nav from './configs/nav.config.json';

export default function Nav() {
	return (
		<ul className='footer-nav'>
			{nav.map(elem => <NavLink {...elem} key={shortid.generate()}/>)}
		</ul>
	)
}

function NavLink (props) {
	return <li><a href='/'>{props.name}</a></li>;
}

NavLink.propTypes = {
	name: PropTypes.string.isRequired
};