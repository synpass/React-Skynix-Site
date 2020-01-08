import React from 'react';

export default function Banner(props) {
    const {title} = props;

    const scrollFunc = (e) => {
        e.preventDefault();

        let target = document.getElementsByClassName('section-banner')[0].nextSibling,
            targetPos = target.offsetTop;

        window.scrollTo(0, targetPos);
    };

    return (
        <section className="section-banner">
            <div className="section-banner__background"></div>
            <div className="section-banner__content">
                <h2 className="section-banner__title">{title}</h2>
                <a className="section-banner__scroll" href="#" onClick={scrollFunc}>
                    <span className="section-banner__text">Scroll to navigate</span>
                    <span className="section-banner__icon"></span>
                </a>
            </div>
        </section>
    )
}