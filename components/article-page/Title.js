import React from 'react';
import PropTypes from 'prop-types';

export default function Title(props) {
    const {title} = props;
    return (
        <h1 className='blog-article__title'>{title}</h1>
    )
}
Title.propTypes = {
    title: PropTypes.string
};