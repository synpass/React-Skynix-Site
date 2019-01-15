import {Animated} from "react-animated-css";
import brands from './configs/management-brands.config.json';
import Brands from "../e-commerce/Brands";

export default function ProjectManagement() {
    const animation = {
        animationIn: 'fadeInDown',
        animationInDelay: 400,
    };
    return (
    <Animated {...animation}>
        <div className="tech__block tech__block-pos1">
            <h2 className="section-heading">project management & comunication</h2>
            <p className="paragraph paragraph-size1 paragraph-pos1">
                A key link between you and your team is your project manager.<br/>
                They will translate your needs and wants into clear tech tasks,<br/>
                coordinate all aspects of your project from start to end,<br/>
                keeping you in control over your project progress and budget<br/>
                regularly at the time suitable for you.
            </p> 
        </div>
        <Brands brands={brands}/>
    </Animated>
    )
}
