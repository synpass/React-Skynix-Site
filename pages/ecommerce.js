import React, {Component} from 'react';
import ParallaxText from "../components/e-commerce/ParallaxText";
import Page from "../components/Page";
import Rate from "../components/e-commerce/Rate";
import ThemeDev from "../components/e-commerce/ThemeDev";
import Brands from "../components/e-commerce/Brands";
import Platform from "../components/e-commerce/platform/Platform";

export default class Ecommerce extends Component {
    render() {
        return (
            <Page>
                <ParallaxText/>
                <Rate/>
                <ThemeDev/>
                <Brands/>
                <Platform/>
            </Page>
        )
    }
}