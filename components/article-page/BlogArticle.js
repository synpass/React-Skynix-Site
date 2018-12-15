import React, {Component} from 'react';
import ArticleHeader from "../article-page/ArticleHeader";
import Social from "../article-page/Social";
import ArticleBody from "../article-page/ArticleBody";
import Articles from '../article-page/Articles.js';



import PropTypes from 'prop-types';


function ArticleWrapped(props) {
    const { articleItems } = props;
    if(!articleItems)return false;
    return (
        articleItems.map(item =>
            <div className='blog-article' key={item.id}>
                <ArticleHeader {...item}/>
                <div className='blog-article__content'>
                    <div className='blog-article-share'>
                        <div className='blog-article-share__title'>Share</div>
                        <Social/>
                    </div>
                    <ArticleBody {...item}/>

                </div>
            </div>
        )
    );
}


const BlogArticle = Articles(ArticleWrapped);

export default BlogArticle;


BlogArticle.propTypes = {
    items: PropTypes.array,
};


