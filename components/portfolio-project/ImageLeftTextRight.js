import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';

export default function ImageLeftTextRight(props) {
    const { animation, image, title, text } = props;
    return (
        <Animated {...animation}>
             <div className="image-left-text-right">
                <img src={image.source_url} alt=""/>
                <div>
                    <h2 className="image-left-text-right__title">{ReactHtmlParser(title)}</h2>
                    <div className="image-left-text-right__text">{ReactHtmlParser(text)}</div>
                </div>
            </div>
        </Animated>
    )
}