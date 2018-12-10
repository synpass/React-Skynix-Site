import React from 'react';

export default function UpworkReview() {
    return (
        <div className='upwork-review'>
            <div className='upwork-review__logo'>
                <img src='/static/images/reviews/logo.jpeg'/>
            </div>
            <div className='upwork-review-content'>
                <div className='upwork-review__comp-name'>Skynix</div>
                <div className='upwork-review__top-rated'>
                    <span className='glyphicon air-icon-top-rated'/>
                    TOP RATED
                </div>
                <div className='upwork-review__span'>95% Job Success</div>
                <div className='upwork-review__line'/>
                <div className='upwork-review__hours'>over 21,000 hours</div>
            </div>
        </div>
    );
}