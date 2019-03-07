import React from 'react';
import LazyLoad from "../LazyLoad";
import reviews from './configs/reviews.config.json';
import PropTypes from 'prop-types';
import UpworkReview from '../reviews/Upwork';
import GoogleReview from '../reviews/Google';
import Clutch from '../reviews/Clutch';

export default function Reviews() {
    return (
        <LazyLoad className='reviews' animationIn='fadeIn' animationInDelay = {600}>
            <h4 className='reviews__title'>Check out our <b>reviews</b></h4>
            <div className='reviews__grid'>
                <div className='reviews__item'>
                    <div className='reviews__item__clutch'>
                        <Clutch/>
                    </div>
                </div>
                <a href='https://goo.gl/maps/Y1bCps1hKuB2' className='reviews__item'>
                    <GoogleReview/>
                </a>
                <a href='https://www.upwork.com/agencies/~0147b06d43db598866' className='reviews__item'>
                    <UpworkReview/>
                </a>
            </div>
        </LazyLoad>
    )
}
