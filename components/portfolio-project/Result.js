import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';

export default function Result(props) {
    const { animation, title, text } = props;
    return (
        <Animated {...animation}>
            <div>
                <h2 className='heading'>{ReactHtmlParser(title)}</h2>
                <div>
                    {ReactHtmlParser(text)}
                </div>
            </div>
        </Animated>
    )
}