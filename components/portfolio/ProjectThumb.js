import React, { Component } from 'react'
import {Link} from '../../routes'
import { object, number, string, oneOfType, bool } from "prop-types";
import ReactHtmlParser from 'react-html-parser';

export default class ProjectThumb extends Component {

    state = {
        imgSrc: ""
    }

    async componentDidMount () {
        const mediaLink = this.props._links["wp:attachment"][0].href;

        const media = await fetch(`${mediaLink}&per_page=100`);
        const json = await media.json()

        const filtered = json.find(mediaData => {   
            return mediaData.slug === this.props.hero_banner_image.post_name;
        })

        if (filtered) { 
            const imgSrc =  filtered.source_url

            this.setState({imgSrc})
        };
    }

    render() {
        return (
            <div className="project">
                        <div className="project__info">
                            <div className="__project-desc">
                                <h3 className="project__title"> { ReactHtmlParser(this.props.title_1) } </h3>
                                <p className="project__p"> 
                                    {ReactHtmlParser(this.props.subtitle_1)}
                                </p>
                            </div>
                            <div className="project__links">
                                <Link route='project' params={{slug: this.props.slug}}>
                                    <a className="project__link">
                                        learn more
                                    </a>
                                </Link>
                                <a className="project__link" href={this.props.link_to} target="_blank" rel="noopener noreferrer">
                                    go to website 
                                </a>
                            </div>
                        </div>
                        

                        <div className="project__thumb-wrap">
                          <img src={this.state.imgSrc} className="project__thumb" />
                        </div>
             </div>
        )
    }
}

ProjectThumb.propTypes = {
    slug: string,
    title_1: oneOfType([string, number]),
    _links: object,
    hero_banner_image: oneOfType([object, bool]),
    link_to: string,
    subtitle_1: string
}

ProjectThumb.defaultProps = {
    slug: "",
    title_1: "",
    _links: {},
    hero_banner_image: {},
    link_to: "",
    subtitle_1: ""
}
