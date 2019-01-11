import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

export default function NewsItem(props) {
    const {imageUrl, title, slug} = props;


    function _openArticle(e){
        let params = window.location.origin +'/'+e;
        document.location.href = params;
    }
    return (
        <a className='news-item' onClick={() => _openArticle(slug)}>
            <div className='news-item__img' style={{backgroundImage: `url(${imageUrl}`}}/>
            <p>{ReactHtmlParser(title.rendered)}</p>
        </a>
    )
}

NewsItem.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.objectOf(PropTypes.string),
    slug: PropTypes.string
};