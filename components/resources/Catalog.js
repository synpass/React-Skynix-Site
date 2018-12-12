import React, {Component} from 'react';
import CatalogArticle from "./CatalogArticle";
import LazyLoad from "../LazyLoad";
import PropTypes from 'prop-types';
import Pagination from "../Pagination";
import PostsWrapper from './PostsWrapper';

function CatalogWrapped(props) {
    const {page, items, totals} = props;

    return (
        <LazyLoad className='catalog'>
            {items.map(item => <CatalogArticle {...item} key={item.id}/>)}
            <Pagination
                current={page}
                total={totals}
                navLink='/resources'
            />
        </LazyLoad>
    );
}

const Catalog = PostsWrapper(CatalogWrapped);

export default Catalog;

Catalog.propTypes = {
    page: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    items: PropTypes.array,
    totals:  PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}