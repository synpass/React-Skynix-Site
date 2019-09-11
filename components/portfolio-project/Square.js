import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';

export default function Square(props) {
    const { animation, image1, image2, image3, title, textRight, textLeft } = props;
    return (
        <Animated {...animation}>
            <div>
                <img src={image1.source_url} alt=""/>
                <h2>{ReactHtmlParser(title)}</h2>
                <div>{ReactHtmlParser(textRight)}</div>
                <div>{ReactHtmlParser(textLeft)}</div>
                <img src={image2.source_url} alt=""/>
                <img src={image3.source_url} alt=""/>
            </div>
        </Animated>
    )
}