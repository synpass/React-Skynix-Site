import React, {Component} from 'react';
import CatalogArticle from "./CatalogArticle";
import {Animated} from "react-animated-css";
import PropTypes from 'prop-types';
import Pagination from "../Pagination";


class Catalog extends Component {
    constructor(props) {
        super(props);

        this.animation = {
            animationIn: 'fadeInUp',
            animationInDelay: 600
        };
    }

    render() {
        return(
            <div className='catalog'>
                {this.props.items.map(item => <CatalogArticle {...item} key={item.id}/>)}
                <Pagination
                    current={this.props.page}
                    total={this.props.totals}
                    navLink='/resources'
                />
            </div>
        )
    }
}

export default Catalog;

Catalog.propTypes = {
    page: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    items: PropTypes.array,
    totals: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}