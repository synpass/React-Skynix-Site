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
                    Our DevOps engineers are magicians of Amazon Web Services,<br/>
                    complex architectures, software integrations, mind-blowing<br/>
                    customizations and continuous integration systems. They ensure<br/>
                    that your staging and production environments have secure and<br/>
                    reliable architecture, and your customers never have to face any<br/>
                    downtimes, technical or security difficulties.
                </p>
            </div>
            <FrontBrands/>
        </Animated>
    </div>
    )
}
