import React from 'react';
import {Animated} from "react-animated-css";

export default function Ideology() {
	const animation = {
		animationIn: 'fadeInRight',
		animationInDelay: 1500
	};
	return (
		<Animated {...animation} className='as-history'>
					<h2 className='section-heading as-history__heading'>ideology</h2>
					<p className="paragraph paragraph--large as-history__paragraph">We derive our inspiration from seeing people succeed. Our 
					strongest enthusiasm boost comes from providing those who rely on us, whether they’re our 
					partners or our colleagues, with the foundation and tools for success. It 
					empowers, witnessing the results of our collective work enrich, simplify and 
					bring value to people’s lives. We unlock our potential by unlocking yours.</p>
		</Animated>
	)
}
