import React from 'react';
import Particle from "../Particle";
import { Animated } from 'react-animated-css';

export default function Approach() {
	const animation = {
		animationIn: 'fadeIn',
		animationInDelay: 800
	};
	return (
		<Animated {...animation} className='pr-approach'>
				<h3 id="approach" className='heading'>approach</h3>
				<h2 className="heading__sub">your search for your dream team ends here</h2>
				<p className='paragraph'>You benefit from a 
				complete and dedicated development 
				environment, a team of specialists with experience 
				and skills relevant to your project, while you’re not 
				being weighed down by infrastructure expenditures</p>
				<div className='pr-approach__particle'>
					<Particle/>
				</div>
		</Animated>
	)
}
