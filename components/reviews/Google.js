import React from 'react';
import GoogleStars from "./GoogleStars";

export default function GoogleReview() {
    return (
        <div className='google-review'>
            <div className='google-review__comp-name'>Skynix LLC</div>
            <div className='google-review__stars'><GoogleStars value='5.0'/></div>
            <div className='google-review__qty'>7 reviews</div>
            <div className='google-review__logo'><img src='/static/images/reviews/google-logo.png'/></div>
        </div>
    );
}