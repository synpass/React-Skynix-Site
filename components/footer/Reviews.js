import React from 'react';
import LazyLoad from "../LazyLoad";
import reviews from './configs/reviews.config.json'

export default function Reviews() {
    return (
        <LazyLoad className='reviews' animationIn='fadeInUp'>
            <h4 className='reviews__title'>Check out our <b>reviews</b></h4>
            <div className='reviews__grid'>
                {reviews.map(item => <ReviewItem {...item} key={item.id}/>)}
            </div>
        </LazyLoad>
    )
}

function ReviewItem(props) {
    return (
        <a href={props.link} className='reviews__item'>
            <img src={'/static/images/reviews/' + props.img} className={props.imgClass}/>
        </a>
    )
}