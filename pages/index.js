import Page from "../components/Page";
import React, {Component} from 'react';
import ParallaxBg from "../components/background/ParallaxBg";
import Intro from "../components/intro/Intro";
import Solutions from "../components/home-slides/Solutions"
import ReactFullpage from '@fullpage/react-fullpage';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currSlide: null
        };
        this.handleOnLeaveSlide = this.handleOnLeaveSlide.bind(this);
    }


    handleOnLeaveSlide(origin, destination, direction) {
        this.setState({currSlide: destination.index});
    }

    render() {
        const fullpageOptions = {
            anchors: ["introPage", "solutionPage"],
            onLeave: this.handleOnLeaveSlide
        };

        return (
            <Page loading={true}>
                    <ParallaxBg/>
                    <ReactFullpage {...fullpageOptions}
                        render={({ state, fullpageApi }) => {
                            return (
                                <ReactFullpage.Wrapper>
                                    <div className="section">
                                        <Intro/>
                                    </div>
                                    <div className="section solutions-wrapper">
                                        <Solutions show={this.state.currSlide === 1}/>
                                    </div>
                                </ReactFullpage.Wrapper>
                            );
                        }}
                    />
            </Page>
        )
    }


}