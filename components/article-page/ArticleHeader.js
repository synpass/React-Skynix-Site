import React from 'react';
import Title from "./Title";
import AuthorPic from "./AuthorPic";
import ArticleDescription from "./ArticleDescription";
import AuthorName from "./AuthorName";
import DateArticle from "./DateArticle";
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import {Link} from "../../routes";

export default function ArticleHeader(props){
    const {imageUrl, title, authorName, avatar, date, excerpt} = props;

    return (
        <div className = 'blog-article__header' >
            <Link route="/resources">
                <span className="breadcrumb">
                    <span className="breadcrumb__icon"></span>
                    <span className="breadcrumb__text">blog</span>
                </span>
            </Link>
            <img className = 'blog-article__header-image' src={imageUrl}/>
            <div className = 'blog-article__header-content' >
                <Title title={ReactHtmlParser(title.rendered)[0]}/>
                <ArticleDescription desc={excerpt}/>
                <div className='blog-article__info'>
                    <div className='author-info'>
                        <AuthorPic avatar={avatar}/>
                        <AuthorName name={authorName}/>
                    </div>
                    <DateArticle date={date}/>

                    <div className='blog-article__tags'></div>
                </div>
            </div>
        </div>
    )
}
AuthorPic.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    authorName: PropTypes.string,
    avatar: PropTypes.string,
    date: PropTypes.string
};








