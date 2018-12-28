import React from 'react';
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import PostsWrapper from '../resources/PostsWrapper';

function NewsWrapped(props) {
    const { items } = props;
    return (
        <div className='news'>
            {/*<div className='news__grid'>*/}
                {/*{items.length > 0 ? items.map(item => <NewsItem {...item} key={item.id}/>) : null}*/}
            {/*</div>*/}
            {/*<a href='/resources' className='news__link'>view all posts</a>*/}
        </div>
    );
}

const News = NewsWrapped;

export default News;


News.propTypes = {
    items: PropTypes.array,
};