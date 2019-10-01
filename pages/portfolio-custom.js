import React, {Component} from 'react';
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
import ContentSection from "../components/portfolio-project/ContentSection";
import ContentImage from "../components/portfolio-project/ContentImage";
import Square from "../components/portfolio-project/Square";
import Result from "../components/portfolio-project/Result";
import {Link} from '../routes';

class PortfolioCustom extends Component {

    prepareImage(imageObj, allMedia){
        const file = allMedia.filter(media=> media.slug === imageObj.post_name);

        const image = file[0] ? file[0] : {source_url:''};
        return image;
    }

    render() {
        const { projectData, media, metadata } = this.props;

        const canonical = {canonicalUrl: url + '/portfolio/' + projectData.slug};
        const metaTime = {metaPublishedTime: projectData.date, metaModifiedTime: projectData.modified};
        const sameMeta ={ogLocale: 'en_US', ogType: 'article'};
        const acf = metadata ? metadata.acf : {};

        if(!projectData){
            return null
        }

        const {title_1, subtitle_1, content_1, hero_banner_image} = projectData;
        const textRight = projectData['block6_text-right'],
              textLeft = projectData['block6_text-left'];

        const animation = (sequence=1) => {
            return {
                animationIn: 'fadeIn',
                animationInDelay: 400*sequence
            }
        };

        const title = projectData.title.rendered;
        const description = projectData.meta_description;

        const meta = {title, description, ...acf , ...canonical, ...sameMeta, ...metaTime}

        return (
            <Page meta={meta} newsItems={this.props.newsItems} loading={true} showLoader={this.props.showLoader} canonical={url + "/portfolio/" + this.props.canonicalPage}>
                <div className="pr-approach">
                    <Link route="/portfolio">
                        <span className="breadcrumb">
                            <span className="breadcrumb__icon"></span>
                            <span className="breadcrumb__text">portfolio</span>
                        </span>
                    </Link>
                    <TitleHeading animation={animation(1)} title={title_1} subtitle={subtitle_1}/>
                </div>
                <div className="content--medium">
                    <ContentSection content={content_1} animation={animation(2)} />
                </div>
                <HeroBanner animation={animation(3)} image={this.prepareImage(hero_banner_image, media)} />
                <div className="content--medium content--top-offset">
                    <ImageLeftTextRight
                        animation={animation(4)}
                        image={this.prepareImage(projectData.block1_image, media)}
                        title={projectData.block1_title}
                        text={projectData.block1_text}
                    />
                    <ContentImage animation={animation(4)} image={this.prepareImage(projectData.block2_image, media)}></ContentImage>
                    <ContentSection content={projectData.block3_text} animation={animation(6)} />
                </div>
                <div className="tech__bg-pos4 content--large2">
                    <div className="content--large">
                        <TextLeftImageRight animation={animation(7)} link={projectData.link_to} image={this.prepareImage(projectData.block4_image, media)} text={projectData.block4_text} title={projectData.block4_title} />

                        <Animated {...animation(8)}>
                            <h2 className="heading--2"> {ReactHtmlParser(projectData.block5_title)}</h2>
                        </Animated>

                        <ContentSection content={projectData.block5_text} animation={animation(8)} />
                        <Square
                            animation={animation(9)}
                            image1={this.prepareImage(projectData.block6_image1, media)}
                            image2={this.prepareImage(projectData.block6_image2, media)}
                            image3={this.prepareImage(projectData.block6_image3, media)}
                            title={projectData.block6_title}
                            textRight={textRight}
                            textLeft={textLeft}
                        />
                        </div>
                    </div>
                    <Result animation={animation(10)} title={projectData.block7_title} text={projectData.block7_text}/>
                    <div className="content--large2">
                        <div className="content--large">

                            <ImageLeftTextRight
                                animation={animation(11)}
                                image={this.prepareImage(projectData.block8_image, media)}
                                title={projectData.block8_title}
                                text={projectData.block8_text}
                                classN="image-left-text-right--pos1"
                            >
                                <div className="tech__bg-pos5"/>
                            </ImageLeftTextRight>
                            <ContentSection content={projectData.block9_text} animation={animation(12)} />
                            <TextLeftImageRight classN="text-left-image-right--conclusion" withoutShadow={true} animation={animation(13)} link={projectData.link_to} image={this.prepareImage(projectData.block10_image, media)} text={projectData.block10_text} title={projectData.block10_title} />
                        </div>
                        </div>

                
            </Page>
        )
    }
}

PortfolioCustom.getInitialProps = async ({ query }) => {
    let data;
    const portfolioData = await Service.getPortfolioProject(query.project);
    if(!portfolioData.data[0]){
        return
    }
    let id = portfolioData.data[0].id;

    const media = await Service.fetchProjectMedia(id);
    const metadata = await Service.getPortfolioMeta(id)
    data = {
        projectData: portfolioData.data[0],
        metadata: metadata.data,
        media: media.data,
        canonicalPage: query.project
    };

    return data;
}

export default connect(state => state)(PortfolioCustom);