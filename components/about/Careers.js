import React, {Component} from 'react';
import LazyLoad from "../LazyLoad";
import Particle from "../Particle";

export default class Careers extends Component {

	render(){
		function handleClick(e) {
			e.preventDefault();
			$('.as-careers__modal, .as-careers__substrate').toggle();
		}
		return (
			<LazyLoad className='as-careers'>
				<h2 className='section-heading as-careers__heading'>careers</h2>
				<p className="paragraph paragraph--large as-careers__paragraph">Join Skynix</p>
				<div className="as-careers__row">
					<div className="as-careers__col as-careers__fix-width">
						<p className="as-careers__open-vacancies">Open Vacancies</p>
						<ul className="as-careers__vacancies">
							<li>SEO Specialist</li>
							<li>PHP / Magento Developer</li>
							<li>Front End Developer</li>
							<li>Business Development Manager</li>
						</ul>
					</div>
					<div className="as-careers__col">
						<a href="#" className="as-careers__button" onClick={handleClick}>Send Us Your Resume</a>
					</div>
				</div>
				<div className='as-careers__particle'>
					<Particle/>
				</div>
			</LazyLoad>
		)
	}
}
