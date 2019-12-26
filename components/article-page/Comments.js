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
                        <h2 className='blog-comment-form__title comment-messages__title'>
                            Comments {this.state.comments.length != 0 ?
                            <span className='comment-messages__count'>{this.state.comments.length}</span> : ''}
                        </h2>

                        {this.state.comments.map((comment, index) => {

                            const date = new Date(comment.date);
                            const postMonth = () => {
                                const monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
                                for (let i = 0; i <= monthList.length; i++) {
                                    if (date.getMonth() == i) return monthList[i];
                                }
                            };
                            const dateFormatted = `${date.getDate()} ${postMonth()} ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;

                            return (
                                <Comment 
                                    name={comment.author_name}
                                    photo={comment.author_avatar_urls}
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