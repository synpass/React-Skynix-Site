import React from 'react';
import {Animated} from "react-animated-css";

export default function History() {
	const animation = {
		animationIn: 'fadeInLeft',
		animationInDelay: 1100
	};
	return (
		<Animated {...animation} className='as-history'>
					<h2 className='section-heading as-history__heading'>history</h2>
					<p className="paragraph paragraph--large as-history__paragraph">Skynix LLC was established in 
					2015 and has been operating worldwide from a cozy office in the beautiful 
					capital of Ukraine. In under a year our team grew from four to over 
					twenty tech thirsty individuals, happy to serve our partners from Oceania, 
					Europe, and the Americas. In the future this will expand to allow for many 
					more diverse collaborations around the globe.</p>
		</Animated>
	)
}
