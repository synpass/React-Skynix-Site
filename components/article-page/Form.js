import React, {Component} from 'react';
import Input from "./Input";
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: {
                value: '',
                isValid: false
            },
            author: {
                value: '',
                isValid: false
            },
            email: {
                value: '',
                isValid: true
            },
            submit: {
                value: '',
                isValid: true
            },
            comment_post_ID: {
                value: '1346',
                isValid: true
            },
            comment_parent: {
                value: '0',
                isValid: true
            },
            showError: false,
        };

        this.baseState = this.state;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, value, isValid) {
        let state = {};
        state[name] = {value, isValid};
        this.setState(state);
    }

    handleSubmit(event) {
        const formInputs = ['comment', 'author', 'email', 'submit', 'comment_post_ID', 'comment_parent'];
        event.preventDefault();

        const isValid = formInputs.reduce((prev, curr) => {
            return prev && this.state[curr].isValid
        }, true) && this.state.agreement;


        if (isValid) {
            this.setState({...this.baseState});
        } else {
            this.setState({showError: true});
        }
    }



    render() {
        const error = this.state.showError;
        const {comment, author, email, submit, comment_post_ID, comment_parent} = this.state;
        return (
            <form
                  onSubmit={this.handleSubmit} noValidate
                  method='post'
                  className='blog-comment-form'
                  name='comment'>
                <h2 className='blog-comment-form__title'>Comments</h2>
                <div className='blog-comment-form__form-group'>
                    <Input
                        value={comment.value}
                        className='blog-comment-form__textarea'
                        error={error}
                        onChange={this.handleChange}
                        name='comment'
                        required={true}
                        label=''
                        pattern='.{2,}'
                        type='textarea'
                    />
                    <label className='blog-comment-form__label blog-comment-form__label--textarea'>
                        Write Comment
                        <span>*</span>
                    </label>
                    <span className='blog-comment-form__error-message'>This field cannot be empty</span>
                </div>
                <div className='blog-comment-form__form-group'>
                    <Input
                        value={author.value}
                        className='blog-comment-form__input'
                        error={error}
                        onChange={this.handleChange}
                        name='author'
                        required={true}
                        label=''
                        pattern='.{2,}'
                        type='text'
                    />
                    <label className='blog-comment-form__label'>Your Name <span>*</span></label>
                    <span className='blog-comment-form__input-bar'></span>
                    <span className='blog-comment-form__error-message'>Enter at least 2 characters</span>
                </div>
                <div className='blog-comment-form__form-group'>
                    <Input
                        value={email.value}
                        className='blog-comment-form__input'
                        error={error}
                        onChange={this.handleChange}
                        name='email'
                        required={true}
                        label=''
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        type='email'
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
                <Input
                    value={submit.value}
                    className='submit'
                    onChange={this.handleChange}
                    name='submit'
                    required={false}
                    label=''
                    id='submit'
                    type='hidden'
                />
                <Input
                    value={comment_post_ID.value}
                    className='submit'
                    onChange={this.handleChange}
                    name='comment_post_ID'
                    required={false}
                    label=''
                    id='comment_post_ID'
                    type='hidden'
                />
                <Input
                    value={comment_parent.value}
                    className='submit'
                    onChange={this.handleChange}
                    name='comment_parent'
                    required={false}
                    label=''
                    id='comment_parent'
                    type='hidden'
                />
            </form>
            )

    }
}