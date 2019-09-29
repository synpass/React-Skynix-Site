import {Animated} from "react-animated-css";

export default function TitleHeading(props) {
    const { animation, image } = props;
    return (
        <Animated {...animation}>
            <div className="content-image">
                <img src={image.source_url} alt=""/>
            </div>    
        </Animated>
    )
}