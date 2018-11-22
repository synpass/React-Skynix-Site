import React, {Component} from 'react';
import { Animated } from "react-animated-css";
import Bracket from "./background/Bracket";

export default class ParallaxSlide extends Component {
    render() {
        let classNames1 = ['bg__elem', 'bg__elem--bracket'];
        let classNames2 = ['bg__elem', 'bg__elem--bracket-reverse'];
        let classNames3 = ['bg__elem', 'bg__elem--slash'];

        if(this.props.loaded) {
            classNames1.push('move');
            classNames2.push('move');
        }

        return (
            <div className='bg'>
            <Animated animationIn="fadeIn">
                <div className={classNames1.join(' ')}>
                    <Bracket parallax={true}/>
                </div>
            </Animated>
            <Animated
                animationOut="fadeOut"
                animationInDelay={200}
                animationOutDelay={500}
                isVisible={!this.props.loaded}>
                <div className={classNames3.join(' ')}>
                    <Bracket type='slash' parallax={true}/>
                </div>
            </Animated>
            <Animated animationIn="fadeIn">
                <div className={classNames2.join(' ')}>
                    <Bracket parallax={true}/>
                </div>
            </Animated>
            </div>
        );
    }
}