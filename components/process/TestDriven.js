import React, { Component } from 'react';
import LazyLoad from "../LazyLoad";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {TweenMax} from 'gsap';

export default class TestDriven extends Component {
	
	componentDidMount() {
		const script = (
			
			$('.pr-testdriven').on('mousewheel DOMMouseScroll', function (event) {
				
				let processContainer = $('.js-hook__td-title');

				if (processContainer.css('display') === 'none') {
					return;
				}

				let scrollValue = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ?
					- event.originalEvent.detail 
					:
					event.originalEvent.wheelDelta;
				
				let	currentItem = processContainer.find('div.active'),
					titledata = currentItem.data('wavetitle'),
					finishScrollValue = $('.pr-testdriven').offset().top,
					nextItem;
				
				if ((titledata === 8 && scrollValue < 0) || (titledata === 1 && scrollValue > 0)) {
					return;
				} 
				
				event.preventDefault();

				if ( window.scrollY - finishScrollValue > 10 || window.scrollY - finishScrollValue < -10 ) {
					smoothScroll(window.scrollY, finishScrollValue);
				} else {
					getNextStep();
				}

				function getNextStep () {
					
					let descriptionContainer = $('.js-hook__td-content');
					let nextDescription; 

					if ( scrollValue < 0 && titledata < 8) {
						currentItem.removeClass('active');
						nextItem = currentItem.next('.item-wave');
						nextItem.addClass('active');
						titledata = nextItem.data('wavetitle');
					}
					else if (scrollValue > 0 && titledata > 1) {
						currentItem.removeClass('active');
						nextItem = currentItem.prev('.item-wave');
						nextItem.addClass('active');
						titledata = nextItem.data('wavetitle');
					}
					
					processContainer.attr('class', 'pr-testdriven__wave-area js-hook__td-title').addClass('step-' + titledata)

					descriptionContainer
						.find('.active')
						.removeClass('active');
					nextDescription = descriptionContainer
						.find('.content-show[data-wavecontainer=' + titledata + ']')
						.addClass('active');
						
					if (nextDescription.children().length === 1) {
						descriptionContainer.css('opacity', 0);
					} else {
						descriptionContainer.css('opacity', 1);
					}
					
				}

				function smoothScroll (currentScroll, finishVal) {
					let timer;
					let currentVal = currentScroll;
						
					if ( currentVal < finishVal && scrollValue < 0 ) {
						timer = setTimeout( () => {
							window.scrollTo(0, currentVal);
							smoothScroll(currentVal + 10, finishVal);
						}, 10);
					} else if ( currentVal > finishVal - 1 && scrollValue > 0 ) {
						timer = setTimeout( () => {
							window.scrollTo(0, currentVal);
							smoothScroll(currentVal - 11, finishVal);
						}, 10);
					} else {
						clearTimeout(timer);
					}
				}
			})
		);
	}

	render () {
		return (
				<LazyLoad className='pr-testdriven'>
					<div className="pr-testdriven__fon-title-area">
						<p className="fon-title">process</p>
						<h2 onClick = {this.handleWheel} className="section-heading">agile test driven development</h2>
					</div>
					
					<AnchorLink href='#competitivepricing' offset='-120' className = 'pr-testdriven__go-next-section'>Next section</AnchorLink>
					
					<div className='pr-testdriven__wave-area step-1 js-hook__td-title'>
						<div className='item-wave active' data-wavetitle="1">
							<h4 className='wave-title text-top'>Project Kickoff</h4>
						</div>
						<div className='item-wave' data-wavetitle="2">
							<h4 className='wave-title'>Development &<br/>
							PM Environment Setup</h4>
						</div>
						<div className='item-wave' data-wavetitle="3">
							<h4 className='wave-title'>Agile Test<br/>
							Driven Development</h4>
						</div>
						<div className='item-wave' data-wavetitle="4">
							<h4 className='wave-title'>Deploy to Production<br/>
							(live) environment</h4>
						</div>
						<div className='item-wave' data-wavetitle="5">
							<h4 className='wave-title text-top'>Load testing</h4>
						</div>
						<div className='item-wave' data-wavetitle="6">
							<h4 className='wave-title text-top'>Backups</h4>
						</div>
						<div className='item-wave' data-wavetitle="7">
							<h4 className='wave-title text-top'>Go live!</h4>
						</div>
						<div className='item-wave' data-wavetitle="8">
							<h4 className='wave-title'>Ongoing<br/>
							Maintenance</h4>
						</div>
					</div>

					<div className="pr-testdriven__content js-hook__td-content">

						<div className="content-show active" data-wavecontainer="1" >
							<h5 className="content-title">Project Kickoff</h5>
							<ul>
								<li>we get to the bottom of your every expectation and requirement</li>
								<li>Where necessary, we prepare a full project specification and 
								submit a detailed quote for your review and approval</li>
							</ul>
						</div>

						<div className="content-show" data-wavecontainer="2">
							<h5 className="content-title">Development and PM Environment Setup</h5>
							<p>We prepare everything necessary for development, testing & control</p>
						</div>

						<div className="content-show" data-wavecontainer="3">
							<h5 className="content-title">Agile Test Driven Development</h5>
							<ul>
								<li>Writing Acceptance and Functional Tests</li>
								<li>Updates pushed multiple times a day to the repositories</li>
								<li>Automated deploy of updates to the Staging server</li>
								<li>Manual Testing</li>
								<li>Potentially shippable increments of a project delivered
								every 2-3 weeks</li>
								<li>Retrospective at the end of every sprint we look back 
								and determine what could have been 
								done better, further boosting performance on our next undertaking</li>
							</ul>
						</div>

						<div className="content-show" data-wavecontainer="4">
							<h5 className="content-title">Deploy to Production (live) environment</h5>
						</div>

						<div className="content-show" data-wavecontainer="5">
							<h5 className="content-title">Load testing</h5>
						</div>

						<div className="content-show" data-wavecontainer="6">
							<h5 className="content-title">Backups</h5>
						</div>

						<div className="content-show" data-wavecontainer="7">
							<h5 className="content-title">Go live!</h5>
							<p>Uncorking a bottle of Champagne :)</p>
						</div>

						<div className="content-show" data-wavecontainer="8">
							<h5 className="content-title">Ongoing Maintenance</h5>
						</div>

					</div>
				</LazyLoad>
		)
	}
}
