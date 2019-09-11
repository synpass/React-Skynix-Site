import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';

export default function TextLeftImageRight(props) {
    const { animation, image, title, text, link } = props;
    return (
        <Animated {...animation}>
             <div className="text-left-image-right">
                 <div>
                    <h2 className="text-left-image-right__title">{ReactHtmlParser(title)}</h2>
                    <div className="text-left-image-right__text">{ReactHtmlParser(text)}</div>
                 </div>
                <a href={link}>
                    <img src={image.source_url} alt=""/>
                </a>
            </div>
        </Animated>
    )
}