import React from 'react';
import social from './configs/social-full.config.json'

export default function Social() {
    return (
        <div className='m-footer__social'>
            { Object.keys(social).map(key => <SocialItem link={social[key]} icon={key}/>)}
        </div>
    )
}

function SocialItem(props) {
    return (
        <a href={props.link}>
            <svg>
                <use xlinkHref={"/static/images/sprites/social.svg#" + props.icon}/>
            </svg>
        </a>
    );
}