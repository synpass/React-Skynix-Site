import React, {Component} from 'react';
import LazyLoad from "../LazyLoad";
import { Animated } from "react-animated-css";

export default class ThemeDev extends Component {
    render() {
        return (
            <LazyLoad className='ec-rate' animationIn='fadeInUp'>
                <h3 className='section-heading'>Online Shop Theme Development</h3>
                <div className='ec-rate__columns'>
                    <h4 className='paragraph paragraph--large'>Refresh your brand identity, attract and retain more customers
                        by making their shopping experience with you a breeze</h4>

                    <section>
                        <p>Your store must remain clear and user-friendly, provide all the necessary information yet not
                            overwhelm or distract your customers from completing the purchase.</p>
                        <p>Skynix UI team works tightly with platform experts to find <b>a perfect balance between
                            usability and appeal.</b></p>
                    </section>
                </div>
            </LazyLoad>
        )
    }
}