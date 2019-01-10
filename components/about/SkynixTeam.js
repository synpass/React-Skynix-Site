import React from 'react';
import LazyLoad from "../LazyLoad";

export default function SkynixTeam() {
	function SectionTeams(props) {
		return <div className="as-skynixteam__col">
					<img src={props.imageTeam} alt={props.nameTeam} />
					<h4 className="as-skynixteam__name">{props.nameTeam}</h4>
					<p className="as-skynixteam__position">{props.positionTeam}</p>
					<p className="as-skynixteam__description">{props.shortBioTeam}</p>
					<ul className="as-skynixteam__social">
						<li><a target="_blank" href={props.facebookLinksTeam}></a></li>
						<li><a target="_blank" href={props.linkedinLinksTeam}></a></li>
						<li><a target="_blank" href={props.skypeLinksTeam}></a></li>
					</ul>
		</div>
	}
	return (
		<LazyLoad className='as-skynixteam'>
			<h2 className='heading'>skynix <b>team</b></h2>
			<div className="row">
				<SectionTeams nameTeam='Bogdan Kushlyk' imageTeam='https://s3.amazonaws.com/s3-wp-staging/wp-content/uploads/2018/04/22162438/bogdan-k.jpg' positionTeam='Business Development Manager' shortBioTeam='Strong skills in planning, market analysis, and project management. Proven as an effective communicator able to make different teams co-work.' facebookLinksTeam='https://www.facebook.com/SkynixLLC/' linkedinLinksTeam='https://www.linkedin.com/company/skynix/' skypeLinksTeam='https://www.linkedin.com/company/skynix/'/>
			</div>
		</LazyLoad>
	)
}
