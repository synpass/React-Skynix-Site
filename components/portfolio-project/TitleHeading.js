import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';

export default function TitleHeading(props) {
    const { animation, title, subtitle } = props;
    return (
        <Animated {...animation}>
            <div>
                <h1 className='heading'>{ReactHtmlParser(title)}</h1>
                {subtitle ? 
                <h3 className="paragraph">{ReactHtmlParser(subtitle)}</h3>
                : null}
            </div>
        </Animated>
    )
}