import React, {Component} from 'react';

export default class Social extends Component{
    render(){
        const url = window.location.href;
        const sLinks = [
            {className: 'facebook', target: '_blank', href:`https://www.facebook.com/sharer/sharer.php?u=${url}`},
            {className: 'gplus', target: '_blank', href:`https://plus.google.com/share?url=${url}`},
            {className: 'linkedin', target: '_blank', href:`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}`},
            {className: 'pinterest', target: '_blank', href:`https://pinterest.com/pin/create/button/?url=&amp;media=${url}`},
            {className: 'twitter', target: '_blank', href:`https://twitter.com/home?status=${url}`},
            {className: 'email', href:`mailto:?body=${url}`}
        ];
        const listSocialLinks = sLinks.map(
            (item, index) =>{
                return (
                    <a className={'s-icon s-icon--' + item.className}
                       key = {index}
                       target = {item.target}
                       href={item.href}>
                        <span className={'icon-' + item.className}></span>
                    </a>
                )
            }
        );
        return <div className='blog-article-share__icons'>{ listSocialLinks }</div>;
    }
}