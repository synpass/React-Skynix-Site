import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../routes';

function RelatedArticle(props) {
    const { posts, number } = props;

    return (
        posts.map((el, length) => {
            if (length <= number) {
                const {id, imageUrl, date, authorName, title, excerpt, slug} = el;
                const postDate = new Date(date);
                const postMonth = () => {
                    const monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
                    for (let i = 0; i <= monthList.length; i++) {
                        if (postDate.getMonth() == i) return monthList[i];
                    }
                };
                const dateFormatted = `${postMonth()} ${postDate.getDate()}, ${postDate.getFullYear()}`;


                return (
                    <div key={id}>
                        <Link route="article" params={{slug:slug}}>
                            <a className='blog-article__related-article' key={id}>
                                <div className='blog-article__related-image'
                                     style={{backgroundImage: `url(${imageUrl})`}}>
                                </div>
                                <div className='blog-article__related-info'>
                                <span className='blog-article__related-date'>
                                    {dateFormatted}
                                </span>
                                    <span>By {authorName}</span>
                                </div>
                                <h3 className='blog-article__related-title'>
                                    {title.rendered}
                                </h3>
                                <p className='blog-article__related-content'>
                                    {excerpt.rendered.replace(/(\<(\/?[^>]+)>)/g, '').slice(0,200)}
                                </p>
                            </a>
                        </Link>
                    </div>
                );
            }
        })
    );
}


export default RelatedArticle;


RelatedArticle.propTypes = {
    posts: PropTypes.array,
    number: PropTypes.number
};