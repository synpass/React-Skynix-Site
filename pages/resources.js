import React, {Component} from 'react';
import Page from "../components/Page";
import ParallaxText from "../components/ParallaxText";
import Catalog from "../components/resources/Catalog";
import { withRouter } from 'next/router'
import TitleHeader from "../components/resources/TitleHeader";
import CatalogArticle from "../components/resources/CatalogArticle";
import Service from "../components/resources/service";

const Resources = withRouter((props) => {
    console.log('here')
    console.log(props)
    return <ResourcesWrapper page={props.router.query.page} items={props.items} totals={props.totals}/>
});

class ResourcesWrapper extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    onPageLoaded = () => this.setState({isLoaded: true, footerLoaded: true});

    render() {
        return (
            <Page>
                <TitleHeader/>
                <Catalog onLoad={this.onPageLoaded} page={this.props.page} items={this.props.items} totals={this.props.totals}/>
            </Page>
        )
    }
}

Resources.getInitialProps = async ({ query }) => {
    let limit = 0;
    let property;
    await Service.getCatalogByPage(query.page!==undefined?query.page:1)
        .then(async(response) => {
            console.log(response)

            const {success, error, totals} = response;
            let {data} = response;

            if (success) {
                if (limit) {
                    data = data.reverse();
                    data.splice(0, data.length - limit);
                }

                let promises = [];

                data.forEach(item => {
                    promises.push(Service.getPostMedia(item.featured_media));
                    promises.push(Service.getAuthor(item.author));
                });

                await Promise.all(promises).then(response => {

                    data.map((item, i) => {
                        const {success: mediaSuccess, data: mediaData} = response[2 * i];
                        const {success: authorSuccess, data: authorData} = response[2 * i + 1];

                        if (mediaSuccess) item.imageUrl = mediaData.source_url;
                        if (authorSuccess) item.authorName = authorData.name;
                    });

                })
                property = {
                    items: data,
                    totals: totals
                }
            }
        })

    return property;
}


ResourcesWrapper.defaultProps = {
    page: 1
};

export default Resources;