import React from 'react';
import LazyLoad from "../LazyLoad";
import { Animated } from 'react-animated-css';

export default function OfflineCommerce() {
	return (
		<LazyLoad className='pr-partnership'>
			<h3 className='section-heading'>loyalty / partnership scheme</h3>
			<p className='paragraph pr-partnership__paragraph'>Skynix values its' 
			loyal customers and rewards them with not only bespoke services, 
			but also discounts varying between 5% and 20%. To find out 
			how you can join Skynix Partnership Scheme, reach out to 
			your project manager</p>
			<div className="pr-partnership__circle" />
			<div className="pr-partnership__cart" />
			<div className="pr-partnership__heart" />
			<div className="pr-partnership__padding-bottom" />
		</LazyLoad>
	)
}
