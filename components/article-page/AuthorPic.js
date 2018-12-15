import React from 'react';
import PropTypes from 'prop-types';
import DateArticle from "./DateArticle";

export default function AuthorPic(props) {
    const {avatar} = props;

    return (
        <div className='author-info__photo'>
            <img src={avatar}/>
        </div>
    )
}
AuthorPic.propTypes = {
    avatar: PropTypes.string
};
