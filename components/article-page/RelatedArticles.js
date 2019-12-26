import React from 'react';
import PropTypes from 'prop-types';
import RelatedArticle from "./RelatedArticle";


function RelatedArticles(props) {
    const count = props.count - 1;
    const [...items] = props.item;


    return (
        <div className='blog-article__related-articles'>
            <div className="blog-article__related-inner">
                <h2 className='blog-article__related-heading'>Related articles</h2>
                <div className='blog-article__related-wrapper'>
                    <RelatedArticle posts={items} number={count}/>
                </div>
            </div>
        </div>
    );
}


export default RelatedArticles;


RelatedArticles.propsTypes = {
    items: PropTypes.array,
    count: PropTypes.number
};