import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import Bracket from "./Bracket";

export default function ParallaxBg() {
    return (
        <div className='bg'>
            <div>
                <div className='bg__elem bg__elem--bracket move'>
                    <Bracket parallax={true}/>
                </div>
            </div>
            <div>
                <div className='bg__elem bg__elem--slash'/>
            </div>
            <div>
                <div className='bg__elem bg__elem--bracket-reverse move'>
                    <Bracket parallax={true}/>
                </div>
            </div>
        </div>
    );
}