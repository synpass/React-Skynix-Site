import React, {Component} from 'react';
import ArticleHeader from "../article-page/ArticleHeader";
import Social from "../article-page/Social";
import ArticleBody from "../article-page/ArticleBody";
import Comments from '../article-page/Comments.js';
import PropTypes from 'prop-types';


function BlogArticle(props) {
    if(!props)return false;
    return (
        props.article.map(item =>
            <div key={item.id}>
                <div className='blog-article' >
                    <ArticleHeader {...item}/>
                    <div className='blog-article__content'>
                        <div className='blog-article-share'>
                            <div className='blog-article-share__title'>Share</div>
                            <Social/>
                        </div>
                        <ArticleBody {...item}/>
                    </div>
                </div>
                {/*(item.comment_status ==='open') ? <Comments /> : null*/}
            </div>
        )
    );
}

export default BlogArticle;


BlogArticle.propTypes = {
    items: PropTypes.array,
};


