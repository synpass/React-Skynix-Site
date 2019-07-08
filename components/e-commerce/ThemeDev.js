import React, {Component} from 'react';
import { Animated } from "react-animated-css";
import {object, string, oneOfType} from 'prop-types'

export default class ThemeDev extends Component {
    render() {
        const animation = {
            animationIn: 'fadeIn',
            animationInDelay: 1000
        };

        const {props} = this

        return (
            <Animated {...animation}>
                <div className='ec-themedev'>
                    <h3 className='section-heading'> {props.heading} </h3>
                    <div className='ec-themedev__columns'>
                        <h4 className='paragraph paragraph--large'> {props.subheading} </h4>

                        <section>
                            {props.paragraph}
                        </section>
                    </div>
                </div>
            </Animated>
        )
    }
}

ThemeDev.propTypes = {
    heading: oneOfType([object, string]),
    subheading: oneOfType([object, string]),
    paragraph: oneOfType([object, string])
}