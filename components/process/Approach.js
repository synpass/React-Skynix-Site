import React from 'react';
import Particle from "../Particle";
import { Animated } from 'react-animated-css';

export default function Approach() {
	const animation = {
		animationIn: 'fadeInDown',
		animationInDelay: 1000
	};
	return (
		<Animated {...animation}>
			<div className='pr-approach'>
				<h3 className='heading'>approach</h3>
				<h2 className="heading__sub">your search for your dream team ends here</h2>
				<p className='paragraph'>You benefit from a 
				complete and dedicated development 
				environment, a team of specialists with experience 
				and skills relevant to your project, while you’re not 
				being weighed down by infrastructure expenditures</p>
				<div className="pr-approach__fon-title-area">
					<p className="fon-title">process</p>
					<h2 className="section-heading">agile test driven development</h2>
				</div>
				<div className='pr-approach__particle'>
					<Particle/>
				</div>
			</div>
		</Animated>
	)
}
