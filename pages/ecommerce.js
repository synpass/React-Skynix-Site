import React, {Component} from 'react';
import Page from "../components/Page";
import Rate from "../components/e-commerce/Rate";
import DataMigration from "../components/e-commerce/DataMigration";
import ThemeDev from "../components/e-commerce/ThemeDev";
import Brands from "../components/e-commerce/Brands";
import OfflineCommerce from "../components/e-commerce/OfflineCommerce";
import Platform from "../components/e-commerce/platform/Platform";
import BugFixing from "../components/e-commerce/BugFixing";

export default class Ecommerce extends Component {
    render() {
        return (
            <Page>
                <Rate/>
                <ThemeDev/>
                <Brands/>
                <Platform/>
                <DataMigration/>
                <OfflineCommerce/>
                <BugFixing/>
            </Page>
        )
    }
}