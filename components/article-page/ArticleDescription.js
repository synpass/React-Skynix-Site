import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleDescription(props) {
    const {desc} = props;

    return (
        <div className='blog-article__description'>
            <div className='blog-article__description-inner'>
                {desc.rendered.replace(/(\<(\/?[^>]+)>)/g, '')}
            </div>
        </div>
    )
}

ArticleDescription.propTypes = {
    description: PropTypes.string
};
