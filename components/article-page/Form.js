import React, {Component} from 'react';
import Input from "./Input";
import Service from '../resources/service';
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
            commentCreated: false,
            commentError: false
        };

        this.baseState = {...this.state};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, value, isValid) {
        let state = {};
        state[name] = {value, isValid};
        this.setState(state);
    }

    async handleSubmit(event) {
        const formInputs = ['comment', 'author', 'email', 'submit', 'comment_post_ID', 'comment_parent'];
        event.preventDefault();

        const isValid = formInputs.reduce((prev, curr) => {
            return prev && this.state[curr].isValid
        }, true);

        if (isValid) {
            const {email, author, comment, comment_post_ID, comment_parent } = this.state;
            const data = {
                email: email.value,
                name: author.value,
                content: comment.value,
                post: this.props.postId,
                comment_parent: comment_parent.value
            }
            const response = await Service.postComment(1397, data)
            console.log(response)
            if (response.status = 201) {
                this.setState({commentCreated: true, commentError: false})
            } else {
                this.setState({commentCreated: false, commentError: response.message})
            }
        }
    }

    render() {
        const error = this.state.showError;
        const {comment, author, email, submit, comment_post_ID, comment_parent, commentCreated, commentError} = this.state;


        return (
            <div>
                {commentCreated && <div className="comment-success"> Thank you for your comment, it will be published as soon as reviewed by our content administrator. </div>}
                {commentError && <div className="comment-error"> {commentError} </div>}

                <form
                    onSubmit={this.handleSubmit} noValidate
                    method='post'
                    action="https://staging.cms.skynix.co/wp-json/wp/v2/comments"
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
                            className={email.value ? 'blog-comment-form__input blog-comment-form__input--active' : 'blog-comment-form__input'}
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
            </div>
            )

    }
}