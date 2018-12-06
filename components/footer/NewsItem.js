import React from 'react';
import PropTypes from 'prop-types';

export default function NewsItem(props) {
    const { img, link, title} = props;
    return (
        <a href={link} className='news-item'>
            <img src={'/static/images/posts/' + img}/>
            <p>{title}</p>
        </a>
    )
}

NewsItem.propTypes = {
    img: PropTypes.string,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

NewsItem.defaultProps = {
    img: 'post1.png'
};