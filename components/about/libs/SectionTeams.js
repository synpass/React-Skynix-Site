import React from 'react';

export default function SectionTeams(props) {
	return (
		<div className="as-skynixteam__col">
			<img src={props.imageTeam} alt={props.nameTeam} />
			<h4 className="as-skynixteam__name">{props.nameTeam}</h4>
			<p className="as-skynixteam__position">{props.positionTeam}</p>
				{
					props.shortBioTeam
					? <p className="as-skynixteam__description">{props.shortBioTeam}</p>
				: null
				}
			<ul className="as-skynixteam__social">
				{
					props.facebookLinksTeam
					? <li><a className="facebook-ico" target="_blank" href={props.facebookLinksTeam}></a></li>
					: null
				}
				{
					props.linkedinLinksTeam
						? <li><a className="linkedin-ico" target="_blank" href={props.linkedinLinksTeam}></a></li>
						: null
				}
				{
					props.skypeLinksTeam
						? <li><a className="skype-ico" target="_blank" href={props.skypeLinksTeam}></a></li>
						: null
				}
			</ul>
		</div>
	)
}