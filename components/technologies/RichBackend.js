import {Animated} from "react-animated-css";
import Particle from "../Particle";
import BackBrands from "./BackBrands"

export default function RichBackend() {
    const styleBlock = {
        position: 'relative',
    }
    const animation = {
        animationIn: 'fadeIn',
        animationInDelay: 800,
        style: styleBlock,
    };
    return (
    <Animated {...animation}>
        <div className="tech__bg-pos1">
            <span>technology stack</span>
        </div>
        <div className="tech__block tech__block-pos1">
            <div className='tech__bg-pos2'>
                <h2 className='heading'><b>rich & reliable backend </b>development</h2>
                <p className='paragraph paragraph-size2'>
                    Our backend experts build feature-rich web solutions,<br/>
                    both custom and platform-based, from scratch or using<br/>
                    proven PHP frameworks
                </p>
            </div>
        </div>
        <BackBrands/>
    </Animated>
    )
}