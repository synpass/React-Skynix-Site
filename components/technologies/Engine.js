import {Animated} from "react-animated-css";

export default function Engine() {
    const animation = {
        animationIn: 'fadeInDown',
        animationInDelay: 400,
    };
    return (
    <Animated {...animation}>
        <div className="tech__block tech__block-pos1">
            <h2 className="section-heading">search engine optimization</h2>
            <div className="tech__block-pos4">
                <p className="paragraph paragraph-size1 paragraph-pos1">
                    Skynix products meet all essential <br/>
                    technical SEO requirements by default.<br/>
                    A set of complementary SEO serviced<br/>
                    we provide are:
                </p>
                <ul className="tech__block-enginelist">
                    <li>Complete SEO audit. Comprehensive analysis of the current state of the website</li>
                    <li>Competitors&apos; research. Analyzing the biggest players in your niche</li>
                    <li>Semantic core collection and creating the most relevant website structure based on it</li>
                    <li>Optimizing snippet-forming tags and implementing microdata</li>
                    <li>Consultations on any possible SEO issues</li>
                </ul>   
            </div>
        </div>
    </Animated>
    )
}
