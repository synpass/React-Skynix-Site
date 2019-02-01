import React, { Component } from 'react';

export default function ProjectSlide(props) {
    const styles = {
        backgroundImage: 'url(../../static/images/projects/' + props.img + ')'
    };

    return (
        <div className='projects__item-wrapper'>
            <div className='projects__item' style={styles}>
                <section className={props.active ? 'active' : ''}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <a  target="_blank" rel="noopener noreferrer" href={props.link}>{props.phrase}</a>
                    {props.goTo ? <a  rel="nofollow" target="_blank" rel="noopener noreferrer" href={props.goTo}>go to website</a> : null}
                </section>
            </div>
        </div>
    )
}
