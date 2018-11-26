import Page from "../components/Page";
import React, {Component} from 'react';
import ParallaxBg from "../components/background/ParallaxBg";
import Intro from "../components/intro/Intro";
import ReactFullpage from '@fullpage/react-fullpage';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preload: false,
            loaded: false
        };
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({preload: true})
        }.bind(this), 2000);
        setTimeout(function() {
            this.setState({loaded: true})
        }.bind(this), 7000);
    }

    render() {
        return (
            <Page loading={true}>
                <ParallaxBg/>
                <Intro/>
            </Page>
        )
    }


}