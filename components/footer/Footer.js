import React from 'react';
import News from "./News";
import Social from "./Social";
import ClutchBadge from "./ClutchBadge";
import Nav from "./Nav";
import {CookieBanner} from '@palmabit/react-cookie-law';

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
                        <News limit={6} onLoad={props.onLoad} page='1' items={props.items}/>
                    </div>
                    <div className='m-footer__col m-footer__col--right'>
                        <h4 className='m-footer__title'>Skynix Social</h4>
                        <Social/>
                        <ClutchBadge/>
                        <span className='m-footer__copy'>Skynix LLC 2020</span>
                        <span className='m-footer__copy'>Turhenievska St, 55А, Kyiv, 04050</span>
                    </div>
                </div>
                <CookieBanner
                  message="We use cookies to personalize our service and to improve your experience on the website and its subdomains. We also use this information for analytics."
                  policyLink="/privacy-policy"
                  onAccept = {() => {}}
                  onAcceptPreferences = {() => {}}
                  onAcceptStatistics = {() => {}}
                  onAcceptMarketing = {() => {}}
                  styles={{
                    dialog: {},
                    message:{},
                    container:{},
                    button:{}
                  }}
                />
            </footer>
        </div>
    )
}