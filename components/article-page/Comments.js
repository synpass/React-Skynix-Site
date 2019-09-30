import React, { Component } from 'react';
import LazyLoad from '../LazyLoad';
import Form from "../article-page/Form";
import Service from '../resources/service';
import { oneOfType, string, number } from 'prop-types';
import Comment from './Comment';

export default class Comments extends Component{

    state = {
        comments: []
    }

    async componentDidMount () {
        const res = await Service.loadComments(this.props.postId);
        if (res && res.status === 200) {
            this.setState({comments: res.data})
        }
    }

    render () {
        return (
            <LazyLoad className='contact' id='comments'>
                <div id='comments' className='comments-area'>

                    <div className='comment-messages'>             
                        <h2 className='blog-comment-form__title comment-messages__title'>Comments</h2>

                        {this.state.comments.map((comment, index) => {

                            const date = new Date(comment.date)
                            const dateFormatted = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`

                            return (
                                <Comment 
                                    name={comment.author_name}  
                                    content={comment.content}
                                    date={dateFormatted}
                                    key={`comments-${index}`}
                                />
                            )
                        })}
                    </div>
                    <div className='blog-article__comments'>
                        <Form postId={this.props.postId}/>
                    </div>
                </div>

            </LazyLoad>
        )
    }
}

Comments.propTypes = {
    postId: oneOfType([string, number])
}

Comments.defaultProps = {
    postId: 0
}