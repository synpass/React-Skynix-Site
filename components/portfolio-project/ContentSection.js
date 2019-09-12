import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';

export default function ContentSection(props) {
    const { animation, content } = props;
    return (
        <Animated {...animation}>
            <div class="content-section">{ReactHtmlParser(content)}</div>
        </Animated>
    )
}