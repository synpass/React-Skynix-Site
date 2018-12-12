import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

export default function NewsItem(props) {
    const {imageUrl, title} = props;

    return (
        <a className='news-item'>
            <div className='news-item__img' style={{backgroundImage: `url(${imageUrl}`}}/>
            <p>{ReactHtmlParser(title.rendered)}</p>
        </a>
    )
}

NewsItem.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.objectOf(PropTypes.string)
};