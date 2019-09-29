import React from 'react';
import LazyLoad from "../LazyLoad";
import Particle from "../Particle";
import { oneOfType, string, object } from 'prop-types'

export default function BugFixing(props) {
    return (
        <LazyLoad className='ec-bugfixing'>
            <h2 className='section-heading'> {props.heading} </h2>
            <h4 className='paragraph ec-bugfixing__paragraph'>
                {props.subheading}
            </h4>
            {props.points}
            <div className='ec-bugfixing__particle'>
                <Particle/>
            </div>
            <div className="ec-bugfixing__padding-bottom"></div>
        </LazyLoad>
    )
}

BugFixing.propTypes = {
    heading: oneOfType([string, object]),
    subheading: oneOfType([string, object]),
    points: object
}
