import React from 'react';
import LazyLoad from "../LazyLoad";
import Particle from "../Particle";

export default function Engagement() {
	return (
		<LazyLoad className='pr-engagement'>
			<h3 className='section-heading'>engagement models</h3>
			<div className="pr-engagement__row">
				<div className="pr-engagement__col">
					<h4 className="title-col">Fixed Price</h4>
					<p>Fixed budget and timeline. Skynix covers all 
					project risks. Not subject to amendments in scope</p>
					<span className="number-bg">01</span>
				</div>
				<div className="pr-engagement__col">
					<h4 className="title-col">Time & Materials</h4>
					<p>Project budget is based on efforts actually spent, and 
					can be adjusted to the changing needs for time and resources. 
					Time reports and progress tracking available 24/7 in Skynix 
					CRM system and Atlassian project management tools</p>
					<span className="number-bg">02</span>
				</div>
				<div className="pr-engagement__col">
					<h4 className="title-col">Upwork — Dedicated Team</h4>
					<p>You assemble the team of professionals with required 
					qualifications, taking full control over project progress 
					and budget scheme</p>
					<span className="number-bg">03</span>
				</div>
			</div>
			<div className='pr-engagement__particle'>
				<Particle/>
			</div>
		</LazyLoad>
	)
}
