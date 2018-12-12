import React, {Component} from 'react';
import ParallaxText from "../components/ParallaxText";
import Page from "../components/Page";
import Rate from "../components/e-commerce/Rate";
import ThemeDev from "../components/e-commerce/ThemeDev";
import Brands from "../components/e-commerce/Brands";

export default class Ecommerce extends Component {
    render() {
        return (
            <Page>
                <ParallaxText stickyParent='ecRate'>e-commerce</ParallaxText>
                <Rate/>
                <ThemeDev/>
                <Brands/>
            </Page>
        )
    }
}