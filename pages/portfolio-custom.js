import React, {Component} from 'react';
import meta from './portfolio-meta.config.json';
import Page from "../components/Page";
import url from '../domain.config'
import {connect} from "react-redux"
import Service from "../components/resources/service";
import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';
import TitleHeading from "../components/portfolio-project/TitleHeading";
import HeroBanner from "../components/portfolio-project/HeroBanner";
import ImageLeftTextRight from "../components/portfolio-project/ImageLeftTextRight";
import TextLeftImageRight from "../components/portfolio-project/TextLeftImageRight";

class PortfolioCustom extends Component {

    render() {
        const { projectData } = this.props;
        console.log(projectData)
        const {title_1, subtitle_1, content_1, hero_banner_image} = projectData;
        const animation = (sequence=1) => {
            return {
                animationIn: 'fadeIn',
                animationInDelay: 400*sequence
            }

        };


        return (

            <Page meta={this.props.meta} newsItems={this.props.newsItems} loading={true} showLoader={this.props.showLoader} canonical={url + "/portfolio"}>
                <TitleHeading animation={animation(1)}/>
                    <div className='ec-titleheader'>
                        <h1 className='heading'>{ReactHtmlParser(title_1)}</h1>
                        <h3 className="paragraph">{ReactHtmlParser(subtitle_1)}</h3>
                    </div>

                <Animated animation={animation(2)}>
                    <div>{ReactHtmlParser(content_1)}</div>
                </Animated>
                <Animated animation={animation(3)}>
                    <div>
                        <img src={hero_banner_image.guid} sizes="80wv"></img>

                    </div>
                </Animated>
                <Animated animation={animation(4)}>
                    <div>
                        <img src={projectData.block1_image.guid} alt=""/>
                        <h2>{projectData.block1_title}</h2>
                        <div>{ReactHtmlParser(projectData.block1_text)}</div>
                    </div>
                </Animated>

                <div>
                    <img src={projectData.block1_image.guid} alt=""/>
                    <h2>{projectData.block1_title}</h2>
                    <div>{ReactHtmlParser(projectData.block1_text)}</div>
                </div>

            </Page>
        )
    }
}

PortfolioCustom.getInitialProps = async ({ query }) => {
    let data;
    await Service.getPortfolioProject(query.project)
        .then(async(response) => {
            data = {
                projectData: response.data[0]
            };
        })



    return data;
}

export default connect(state => state)(PortfolioCustom);