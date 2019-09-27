import React, { Component } from 'react'
import {Link} from '../../routes'
import { object, number, string, oneOfType, bool } from "prop-types";

export default class ProjectThumb extends Component {

    state = {
        imgSrc: ""
    }

    async componentDidMount () {
        const mediaLink = this.props._links["wp:attachment"][0].href;

        const media = await fetch(mediaLink);
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
                <Link route='project' params={{slug: this.props.slug}}>
                    <a className="project__link">
                        <div className="project__thumb"
                            style={{"backgroundImage": `url(${this.state.imgSrc})`}}
                            />
                        <h3 className="project__title" dangerouslySetInnerHTML={{__html: this.props.title_1}}></h3>
                    </a>
                </Link>
             </div>
        )
    }
}

ProjectThumb.propTypes = {
    slug: string,
    title_1: oneOfType([string, number]),
    _links: object,
    hero_banner_image: oneOfType([object, bool])
}

ProjectThumb.defaultProps = {
    slug: "",
    title_1: "",
    _links: {},
    hero_banner_image: {}
}
