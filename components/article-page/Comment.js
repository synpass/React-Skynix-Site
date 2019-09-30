import React from 'react'

export default function Comment(props) {
    const { content, name, date } = props;

    return (
        <div className="comment" >
            <div className="comment__message" dangerouslySetInnerHTML={{__html: content.rendered}} />
            <div className="comment__info">
                <div className="comment__author">
                    {name}
                </div>
                <div className="comment__date">
                    {date}
                </div>
            </div>
        </div>
    )
}
