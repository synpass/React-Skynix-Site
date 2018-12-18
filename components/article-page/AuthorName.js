import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorName(props) {
    const {name} = props;
    return (
        <div className='author-info__inner'>
            <div className='author-info__name'>{name}</div>
            <div className='author-info__spec'></div>
        </div>
    )
}
AuthorName.propTypes = {
    name: PropTypes.string
};








