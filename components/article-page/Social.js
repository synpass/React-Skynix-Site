import React, {Component} from 'react';

export default class Social extends Component{
    constructor(props) {
        super(props);

        this.state = { url: '' };
    }

    componentDidMount(){
        this.setState({url: window.location.href})
    }

    render(){
        const {url} = this.state;

        const sLinks = [
            {className: 'facebook', target: '_blank', href:`https://www.facebook.com/sharer.php?u=${url}`},
            {className: 'linkedin', target: '_blank', href:`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}`},
            {className: 'pinterest', target: '_blank', href:`https://pinterest.com/pin/create/link/?url=&amp;media=${url}`},
            {className: 'twitter', target: '_blank', href:`https://twitter.com/intent/tweet?url=${url}`},
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
        return <div className='blog-article-share__icons'>{listSocialLinks}</div>;
    }
}