import {Animated} from "react-animated-css";
import FrontBrands from "./FrontBrands"

export default function ElegantFrontend() {
    const animation = {
        animationIn: 'fadeIn',
        animationInDelay: 700,
    };
    return (
    <div className="tech__block-pos1">
        <Animated {...animation}>
            <div className="tech__block tech__block-pos2">
                <h2 className='heading'><b>elegant & responsive frontend </b>development</h2>
                <p className='paragraph'>
                    Our front end developers can quickly customize and adapt your <br/>
                    website's UI to suit your unique company's needs. They make sure<br/>
                    your audience gets your brand's message in an effective way, on<br/>
                    every screen size imaginable.
                </p>
            </div>
            <FrontBrands/>
        </Animated>
    </div>
    )
}
