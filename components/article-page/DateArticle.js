import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

export default function DateArticle(props) {
    const { date: dateArticle} = props;
    return (
        <div className = 'blog-article__public-date' ><Moment format="MMMM, D" >{dateArticle}</Moment></div>
    )
}
DateArticle.propTypes = {
    dateArticle: PropTypes.string
};





