import React, {Component} from 'react';
import { Animated } from "react-animated-css";

export default class ThemeDev extends Component {
    render() {
        const animation = {
            animationIn: 'fadeIn',
            animationInDelay: 1000
        };
        return (
            <Animated {...animation}>
                <div className='ec-themedev'>
                    <h3 className='section-heading'>Online Shop Theme Development</h3>
                    <div className='ec-themedev__columns'>
                        <h4 className='paragraph paragraph--large'>Refresh your brand identity, attract and retain more customers
                            by making their shopping experience with you a breeze</h4>

                        <section>
                            <p>Your store must remain clear and user-friendly, provide all the necessary information yet not
                                overwhelm or distract your customers from completing the purchase.</p>
                            <p>Skynix UI team works tightly with platform experts to find <b>a perfect balance between
                                usability and appeal.</b></p>
                        </section>
                    </div>
                </div>
            </Animated>
        )
    }
}