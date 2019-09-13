import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';

export default function Result(props) {
    const { animation, title, text } = props;
    return (
        <Animated {...animation}>
            <div className="result">
                <div className="result__wrapper content--large2">
                <span className="result__logo">results</span>
                <div className="result__content">
                    <h2 className='heading--2'>{ReactHtmlParser(title)}</h2>
                    <div className="paragraph paragraph--large paragraph--large1">
                        {ReactHtmlParser(text)}
                    </div>
                </div>
                </div>
            </div>
        </Animated>
    )
}