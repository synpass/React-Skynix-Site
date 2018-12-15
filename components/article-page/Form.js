import React, {Component} from 'react';

export default class Form extends Component {
    render() {
        return (
            <form action='https://skynix.company/wp-comments-post.php'
                  method='post'
                  className='blog-comment-form'
                  name='comment'>
                <h2 className='blog-comment-form__title'>Comments</h2>
                <div className='blog-comment-form__form-group'>
                    <textarea className='blog-comment-form__textarea'
                              formcontrolname='commentText'
                              name='comment'
                              pattern='.{2,}'
                              required=''>
                    </textarea>
                    <label className='blog-comment-form__label blog-comment-form__label--textarea'>
                        Write Comment
                        <span>*</span>
                    </label>
                    <span className='blog-comment-form__error-message'>This field cannot be empty</span>
                </div>
                <div className='blog-comment-form__form-group'>
                    <input className='blog-comment-form__input'
                           formcontrolname='name'
                           name='author'
                           type='text'
                           pattern='.{2,}'
                           required=''
                    />
                    <label className='blog-comment-form__label'>Your Name <span>*</span></label>
                    <span className='blog-comment-form__input-bar'></span>
                    <span className='blog-comment-form__error-message'>Enter at least 2 characters</span>
                </div>
                <div className='blog-comment-form__form-group'>
                    <input className='blog-comment-form__input'
                           type='email'
                           formcontrolname='email'
                           name='email'
                           pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                           required=''
                    />
                    <label className='blog-comment-form__label'>Your E-mail <span>*</span></label>
                    <span className='blog-comment-form__input-bar'></span>
                    <span className='blog-comment-form__error-message'>Not a valid email address</span>
                </div>
                <button className='blog-comment-form__submit-button'
                        type='submit'
                        disabled=''>
                    Send Comment
                </button>
                <input name='submit'
                       type='hidden'
                       id='submit'
                       className='submit'
                />
                <input type='hidden'
                       name='comment_post_ID'
                       value='1346'
                       id='comment_post_ID'
                />
                <input type='hidden'
                       name='comment_parent'
                       id='comment_parent'
                       value='0'
                />
            </form>
            )

    }
}