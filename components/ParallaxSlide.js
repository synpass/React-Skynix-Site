import React, {Component} from 'react';
import { Animated } from "react-animated-css";
import Bracket from "./background/Bracket";
import PropTypes from 'prop-types';

export default class ParallaxSlide extends Component {
    render() {
        const { loaded, animate } = this.props;
        
        let classNames1 = ['bg__elem', 'bg__elem--bracket'];
        let classNames2 = ['bg__elem', 'bg__elem--bracket-reverse'];
        let classNames3 = ['bg__elem', 'bg__elem--slash'];

        if(loaded && animate){
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
                    animationIn="flash" 
                    animationOut="fadeOut"
                    animationInDelay={500}
                    animationOutDelay={100}
                    isVisible={animate ? !loaded : true}>
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

ParallaxSlide.propTypes = {
    loaded: PropTypes.bool,
    animate: PropTypes.bool
};