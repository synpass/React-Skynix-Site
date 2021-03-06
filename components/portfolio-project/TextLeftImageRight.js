import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';

export default function TextLeftImageRight(props) {
    const { animation, image, title, text, link, withoutShadow, classN } = props;
    return (
        <Animated {...animation}>
             <div className={`text-left-image-right ${classN?classN:''}`}>
                 <div className="text-left-image-right__content">
                    <h2 className="text-left-image-right__title">{ReactHtmlParser(title)}</h2>
                    <div className="text-left-image-right__text">{ReactHtmlParser(text)}</div>
                     <a  className="text-left-image-right__link" href={link}>go to website</a>
                 </div>
                <a className={`text-left-image-right__image${withoutShadow?' text-left-image-right__image--noshadow':''}`} href={link}>
                    <img src={image.source_url} alt=""/>
                </a>
            </div>
        </Animated>
    )
}