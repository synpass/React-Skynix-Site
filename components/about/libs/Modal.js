import React, {Component} from 'react';
import Form from "../../contact/Form";
import { Animated } from "react-animated-css";
export default class Modal extends Component {

	render(){
		function handleClick(e) {
			e.preventDefault();
			$('.as-careers__modal, .as-careers__substrate').toggle();
		}
		return (
			<div>
				<Animated animationIn='fadeIn' animationInDelay={300} className="as-careers__modal">
					<div className="close" onClick={handleClick} />
					<Form/>
				</Animated>
				<Animated animationIn='fadeIn' animationInDelay={100} className="as-careers__substrate" onClick={handleClick}/>
			</div>
		)
	}
}
