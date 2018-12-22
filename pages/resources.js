import React, {Component} from 'react';
import Page from "../components/Page";
import ParallaxText from "../components/ParallaxText";
import Catalog from "../components/resources/Catalog";
import { withRouter } from 'next/router'
import TitleHeader from "../components/resources/TitleHeader";

const Resources = withRouter((props) => {
    return <ResourcesWrapper page={props.router.query.page}/>
});

class ResourcesWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoaded: false}
    }

    onPageLoaded = () => this.setState({isLoaded: true});

    render() {
        return (
            <Page loading={true} isLoaded={this.state.isLoaded}>
                <TitleHeader/>
                <Catalog onLoad={this.onPageLoaded} page={this.props.page}/>
            </Page>
        )
    }
}

ResourcesWrapper.defaultProps = {
    page: 1
};

export default Resources;