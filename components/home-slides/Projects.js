import React, { Component } from 'react';
import projects from './configs/projects.config.json';
import LazyLoad from "../LazyLoad";
import ProjectSlide from "./ProjectSlide";
import OwlCarousel from 'react-owl-carousel2';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 1,
        };
        this.handleChangeSlide = this.handleChangeSlide.bind(this);
    }

    handleChangeSlide(index) {
        this.setState({activeSlide: index});
    }

    componentDidMount() {
        require("../../static/libs/KeyNavSlider");
    }

    render() {
        const lazyLoadProps = {
            className: 'projects',
            animationIn: 'fadeIn',
            animationInDelay: 0
        };

        const options = {
            loop:false,
            margin:10,
            nav:true,
            responsive: {
                0:{
                    items:1
                },
                1024:{
                    items:2,
                    stagePadding: 72,
                },
            }
        };

        return (
            <LazyLoad {...lazyLoadProps}>
                <OwlCarousel options={options} >
                    {projects.map(project =>
                        <ProjectSlide {...project} key={project.id} index={project.id}/>
                    )}
                </OwlCarousel>
                <a href='/portfolio' className='projects__link'>view more works</a>
            </LazyLoad>
        )
    }
}
