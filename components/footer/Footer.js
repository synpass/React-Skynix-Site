import React from 'react';
import News from "./News";
import Social from "./Social";
import Nav from "./Nav";

export default function Footer(props) {
    return (
        <div className='m-footer-wrapper'>
            <footer className='m-footer' id='footer'>
                <div className='m-footer__nav'>
                    <img src="/static/images/skynix_logo_2018.svg"/>
                    <Nav/>
                </div>
                <div className='m-footer__cols'>
                    <div className='m-footer__col m-footer__col--left'>
                        <h4 className='m-footer__title'>Latest News</h4>
                        <News limit={4} onLoad={props.onLoad} page='1'/>
                    </div>
                    <div className='m-footer__col m-footer__col--right'>
                        <h4 className='m-footer__title'>Skynix Social</h4>
                        <Social/>
                        <span className='m-footer__copy'>Skynix LLC 2018</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}