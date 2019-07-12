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

    componentDidMount(){
        this.setState({
            isLoaded: true,
        });

        this.props.onLoad();
    }

    render() {
        const {items} = this.props;
        if(items!==undefined) {
            return (
                <div className='catalog'>

                    {items.length ? items.map(item => <CatalogArticle {...item} key={item.id}/>) : 
                        <div className="catalog__no-matching">
                            No matching posts found
                        </div>
                    }
                    <Pagination
                        categories={this.props.categories}
                        tags={this.props.tags}
                        current={this.props.page}
                        total={this.props.totals}
                        navLink='/resources'
                    />
                </div>
            )
        } else{
            return null
        }
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