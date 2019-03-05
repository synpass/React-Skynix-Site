import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import AuthorPic from "./AuthorPic";
export default function ArticleBody(props) {
    const {content} = props;
    return (
        <div className='blog-article__content-text'>
            {ReactHtmlParser(content.rendered)}
        </div>
    )
}
AuthorPic.propTypes = {
    content: PropTypes.string,

};