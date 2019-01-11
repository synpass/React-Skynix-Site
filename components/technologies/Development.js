import {Animated} from "react-animated-css";
import DevelopmentBrands from "./DevelopmentBrands"

export default function Development() {
    const animation = {
        animationIn: 'fadeInDown',
        animationInDelay: 400,
    };
    return (
    <Animated {...animation}>
        <div className="tech__block tech__bg-pos2 tech__bg-pos2--top">
            <h2 className="section-heading">development & operations</h2>
            <p className='paragraph'>
                Our DevOps engineers are magicians of Amazon Web Services,<br/>
                complex architectures, software integrations, mind-blowing<br/>
                customizations and continuous integration systems. They ensure<br/>
                that your staging and production environments have secure and<br/>
                reliable architecture, and your customers never have to face any<br/>
                downtimes, technical or security difficulties.
            </p>
            <DevelopmentBrands/>
        </div>
    </Animated>
    )
}
