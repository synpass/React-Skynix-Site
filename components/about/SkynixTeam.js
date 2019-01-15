import React from 'react';
import LazyLoad from "../LazyLoad";
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel2';
import SectionTeams from "./libs/SectionTeams.js";
import values from './configs/section-teams.config.json';

export default function SkynixTeam(props) {

	const options = {
		loop:false,
		margin:20,
		autoplayHoverPause:true,
		autoplayTimeout:3000,
		nav:true,
		autoplay: false,
		responsive: {
			0:{
				items:1,
			},
			544:{
				items:2,
			},
			1024:{
				items:3,
			},
		}
	};

	let team = values.map((value,i) => <SectionTeams {...value} key={value.idTeam} />);

	return (
		<LazyLoad className='as-skynixteam'>
			<h2 className='heading as-skynixteam__heading'>skynix <b>team</b></h2>
			<OwlCarousel options={options}>
				{team}
			</OwlCarousel>
		</LazyLoad>
	)
}

SkynixTeam.propTypes = {
	idTeam: PropTypes.number,
	imageTeam: PropTypes.string,
	nameTeam: PropTypes.string,
	positionTeam: PropTypes.string,
	shortBioTeam:  PropTypes.string,
	facebookLinksTeam:  PropTypes.string,
	linkedinLinksTeam:  PropTypes.string,
	skypeLinksTeam:  PropTypes.string
};
