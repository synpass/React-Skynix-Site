import {Animated} from "react-animated-css";
import QualityBg from "../background/QualityBg";

export default function QualityAssurance() {
    const animation = {
        animationIn: 'fadeInDown',
        animationInDelay: 400,
    };
    return (
    <Animated {...animation}>
        <div className="tech__block tech__block-pos1">
           <div className="tech__bg-pos3">
           <QualityBg/>
           </div>
            <h2 className="section-heading">quality assurance</h2>
            <p className="paragraph">
                Any software development project at Skynix has<br/>
                an integral testing part within.<br/>
                <span className="paragraph-size1">
                    Before we release your system, it goes through<br/>
                    manual and automated testing processes to ensure all code<br/>
                    is refined and is working in the intended manner.
                </span>
            </p>
        </div>
    </Animated>
    )
}
