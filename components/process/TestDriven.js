import React, { Component } from 'react';
import LazyLoad from "../LazyLoad";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class TestDriven extends Component {

	constructor (props) {
		super(props);

		this.processTimeline = this._processTimeline.bind(this);

		this.state = {
			marker: true,
			hideBox: false
		}
	}
	
	componentDidMount() {
		let container = document.querySelector('.pr-testdriven');
		container.addEventListener('wheel', this.processTimeline);
	}

	_processTimeline (event){
		
			let container = document.querySelector('.pr-testdriven');
			let processContainer = container.querySelector('.js-hook__td-title');

			if (getComputedStyle(processContainer, null).display === 'none') {
				return;
			}
			
			let scrollDelta = event.deltaY;
			let	currentItem = processContainer.querySelector('div.active');
			let titledata = currentItem.dataset.wavetitle;
			if(titledata == 5 || titledata == 6 || titledata == 8) {
				this.setState({hideBox: true})
			}else {
				this.setState({hideBox: false})
			}
			let containerTop = container.getBoundingClientRect().top;
			let containerOffset = container.getBoundingClientRect().top - document.querySelector('body').getBoundingClientRect().top;
			let	timer,
				nextItem;
				
			if ((titledata == 8 && scrollDelta > 0) || (titledata == 1 && scrollDelta < 0)) {
				return;
			} 
			
			event.preventDefault();

		if ( containerTop > 10 || containerTop < 0 ) {
			window.scrollTo({
				top: containerOffset,
				behavior: "smooth"
			});
		} else {
			if (this.state.marker) {
				this.setState({marker: false});
				timer = setTimeout( async () => {
					let descriptionContainer = container.querySelector('.js-hook__td-content');
					let nextDescription; 

					if ( scrollDelta > 0 && titledata < 8) {
						currentItem.classList.remove('active');
						nextItem = currentItem.nextElementSibling;
						nextItem.classList.add('active');
						titledata = nextItem.dataset.wavetitle;
						processContainer.setAttribute('class', 'pr-testdriven__wave-area js-hook__td-title');
						processContainer.classList.add('step-' + titledata);
						await this.sleep()
					}
					else if (scrollDelta < 0 && titledata > 1) {
						currentItem.classList.remove('active');
						nextItem = currentItem.previousElementSibling;
						nextItem.classList.add('active');
						titledata = nextItem.dataset.wavetitle;
						processContainer.setAttribute('class', 'pr-testdriven__wave-area js-hook__td-title');
						processContainer.classList.add('step-' + titledata);
						await this.sleep()
					}
					
					descriptionContainer
						.querySelector('.active')
						.classList.remove('active');
					nextDescription = descriptionContainer.querySelector(`[data-wavecontainer= "${titledata}" ]`);
						nextDescription.classList.add('active');
						
					this.setState({marker: true});

					clearTimeout(timer);
					
				}, 400)
			}	
			return;
		}
	}

	timeout(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	sleep = async () =>  {
		await this.timeout(800);
		return null;
	}

	render () {
		return (
				<LazyLoad className='pr-testdriven'>
					<div className="pr-testdriven__fon-title-area">
						<p className="fon-title">process</p>
						<h2 onClick = {this.handleWheel} className="section-heading">agile test driven development</h2>
					</div>
					
					<AnchorLink href='#competitivepricing' offset='35' className = 'pr-testdriven__go-next-section'>Next section</AnchorLink>
					<AnchorLink href='#approach' offset='85' className='pr-testdriven__go-previous-section'>Previous section</AnchorLink>
					
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

					<div className={this.state.hideBox ? 
					"pr-testdriven__content pr-testdriven__content--hidden js-hook__td-content" : 
					"pr-testdriven__content pr-testdriven__content js-hook__td-content"
				}>

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
								<li>Retrospective: at the end of every sprint we look back 
								and determine what could have been 
								done better, further boosting performance on our next undertaking</li>
							</ul>
						</div>

						<div className="content-show" data-wavecontainer="4">
							<h5 className="content-title">Deploy to Production (live) environment</h5>
							<ul>
								<li>Exquisite setup of live architecture and supporting services according to your security and stability demands</li>
								
							</ul>
						</div>

						<div className="content-show" data-wavecontainer="5">
							{/* <h5 className="content-title">Load testing</h5> */}
						</div>

						<div className="content-show" data-wavecontainer="6">
							{/* <h5 className="content-title">Backups</h5> */}
						</div>

						<div className="content-show" data-wavecontainer="7">
							<h5 className="content-title">Go live!</h5>
							<p>Uncorking a bottle of Champagne :)</p>
						</div>

						<div className="content-show" data-wavecontainer="8">
							{/* <h5 className="content-title">Ongoing Maintenance</h5> */}
						</div>

					</div>
				</LazyLoad>
		)
	}
}