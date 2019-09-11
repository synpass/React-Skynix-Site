import {Animated} from "react-animated-css";

export default function HeroBanner(props) {
    const { animation, image } = props;
    return (
        <Animated {...animation}>
            <div className="herobanner">
                <img src={image.source_url} sizes="80wv"></img>
            </div>
        </Animated>
    )
}