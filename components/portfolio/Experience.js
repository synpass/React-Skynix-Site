import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import WorldMap from "./WorldMap";

export default class Experience extends Component {
    render(){
    return(
        <Animated 
        animationIn= "fadeInDown"
        animationInDelay= {400}>>
            <div className='ec-titleheader'>
                <h1 className='heading ec-titleheader__heading'><b>skynix</b> experience</h1>
                <h3 className='paragraph'>
                    In under 3 years Skynix grew to create and maintain over<br/>
                    customized systems for clients and business partners across <br/>
                    Oceania, Europe, and the Americas.
                </h3>
            </div> 
            <WorldMap/>
        </Animated>
        )
    }
    
}
