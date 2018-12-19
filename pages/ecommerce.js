import React, {Component} from 'react';
import ParallaxText from "../components/ParallaxText";
import Page from "../components/Page";
import Rate from "../components/e-commerce/Rate";
import ThemeDev from "../components/e-commerce/ThemeDev";
import Brands from "../components/e-commerce/Brands";
import Platform from "../components/e-commerce/platform/Platform";
import BugFixing from "../components/e-commerce/BugFixing";

export default class Ecommerce extends Component {
    render() {
        return (
            <Page>
                <ParallaxText stickyParent='posts'>e-commerce</ParallaxText>
                <div id='posts'/>
                <Rate/>
                <ThemeDev/>
                <Brands/>
                <Platform/>
                <BugFixing/>
            </Page>
        )
    }
}