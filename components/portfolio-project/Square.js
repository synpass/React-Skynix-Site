import {Animated} from "react-animated-css";
import ReactHtmlParser from 'react-html-parser';

export default function Square(props) {
    const { animation, image1, image2, image3, title, textRight, textLeft } = props;
    return (
        <Animated {...animation}>
            <div className="square">
                <div className="square__1">
                    <img src={image1.source_url} alt=""/>
                </div>

                <div className="square__2">
                    <h2>{ReactHtmlParser(title)}</h2>
                    <div>{ReactHtmlParser(textRight)}</div>
                </div>
                <div className="square__3">{ReactHtmlParser(textLeft)}</div>
                <div className="square__4">
                    <img src={image3.source_url} alt=""/>
                </div>

                <img className="square__top" src={image2.source_url} alt=""/>
            </div>
        </Animated>
    )
}