import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {Link} from '../../routes'

export default function NewsItem(props) {
    const {imageUrl, title, slug} = props;


    return (
        <Link route="article" params={{slug:slug}}>
            <span className='news-item'>
                <div className='news-item__img' style={{backgroundImage: `url(${imageUrl}`}}/>
                <p>{ReactHtmlParser(title.rendered)}</p>
            </span>
        </Link>
    )
}

NewsItem.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.objectOf(PropTypes.string),
    slug: PropTypes.string
};