import React from 'react';
import LazyLoad from '../LazyLoad';
import Form from "../article-page/Form";

export default function Comments(){
    return (
        <LazyLoad className='contact' id='comments'>
            <div id='comments' className='comments-area'>
                <div className='blog-article__comments'>
                    <Form/>
                </div>
            </div>

        </LazyLoad>
    )
}