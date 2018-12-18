import React, {Component} from 'react';
const url = 'https://skynix.company/blog/case-studies/clodify-crm-erp-system-case-study/';
const sLinks = [
    {className: 'facebook', href:`https://www.facebook.com/sharer/sharer.php?u=${url}`},
    {className: 'gplus', href:`https://plus.google.com/share?url=${url}`},
    {className: 'linkedin', href:`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}`},
    {className: 'pinterest', href:`https://pinterest.com/pin/create/button/?url=&amp;media=${url}`},
    {className: 'twitter', href:`https://twitter.com/home?status=${url}`},
    {className: 'email', href:`mailto:?body=${url}`}
];
export default class Social extends Component{
    render(){
        const listSocialLinks = sLinks.map(
            (item, index) =>{
                return (
                    <a className={'s-icon s-icon--' + item.className}
                       key = {index}
                       href={item.href}>
                        <span className={'icon-' + item.className}></span>
                    </a>
                )
            }
        );
        return <div className='blog-article-share__icons'>{ listSocialLinks }</div>;
    }
}