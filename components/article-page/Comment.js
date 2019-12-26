import React from 'react'

export default function Comment(props) {
    const { content, name, photo, date } = props;
    const avatar = photo[24];

    return (
        <div className="comment" >
            <div className="comment__info">
                <div className="comment__author">
                    <div className="comment__author-photo">
                        <img src={avatar} alt="photo"/>
                    </div>
                    <div className="comment__author-name">
                        {name}
                    </div>
                </div>
                <div className="comment__date">
                    {date}
                </div>
            </div>
            <div className="comment__message" dangerouslySetInnerHTML={{__html: content.rendered}} />
        </div>
    )
}
