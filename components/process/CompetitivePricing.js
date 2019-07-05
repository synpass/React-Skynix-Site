import React from 'react';
import LazyLoad from "../LazyLoad";
import Particle from "../Particle";

export default function CompetitivePricing() {
	return (
		<LazyLoad id='competitivepricing' className='pr-competitivepricing'>
			<div className="pr-competitivepricing__row">
				<div className="pr-competitivepricing__col">
					<h2 className='section-heading'>serious about security</h2>
					<p className="paragraph paragraph--large">We regularly audit our environments to fine tune the safety 
					of our systems and yours.</p>
					<div className="paragraph paragraph--large pr-competitivepricing__hidden-line">
					<p className="pr-competitivepricing__inline">We make every effort to follow uncompromising compliance 
					frameworks’ procedures in technology and business operations.</p>
					<div className="pr-competitivepricing__info">?
						<div className="pr-competitivepricing__info-hidden">
							<h4>The IT Infrastructure Library</h4>
							<p>ITIL (the IT Infrastructure Library, created by the United 
							Kingdom’s Office of Government Commerce) ISO/IEC 27001 (the International 
							Code of Best Practice for Information Security from the International Standards 
							Organization in Geneva) CobiT (Control Objectives for 
							Information and Related Technology, from the IT Governance 
							Institute, in the United States)</p>
						</div>
					</div>
					</div>
					<p className="paragraph paragraph--large pr-competitivepricing__hidden-line">100% of the development and testing happens within the walls 
					of our office and our infrastructure.</p>
					<p className="paragraph paragraph--large pr-competitivepricing__hidden-line">We take advantage of premium-class virtual machines and 
					the world’s most trusted AWS Cloud solutions.</p>
				</div>
				<div className="pr-competitivepricing__col pr-competitivepricing__padding-left">
					<h2 className='section-heading'>competitive pricing</h2>
					<p className="paragraph paragraph--large">Skynix locates in the European IT hub, the 4th country 
					in the World by a number of certified IT specialists.</p>
					<p className="paragraph paragraph--large pr-competitivepricing__hidden-line">Ukrainian competence is proven globally, and the country's 
					reasonable operation costs allow us to deliver the best 
					possible value for your money.</p>
				</div>
			</div>
		</LazyLoad>
	)
}
