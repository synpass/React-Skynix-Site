import React, {Component} from 'react';
import Spinner from './Spinner';

export default class ClutchWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    componentDidMount() {
        this.loadScript();
        this.delay();
    }

    loadScript = () => {
        const wrapper = document.querySelector('head');
        const widgetScript = document.createElement('script');
        widgetScript.setAttribute('src', 'https://static1.clutch.co/api/widget.js');
        widgetScript.setAttribute('type', 'text/javascript');
        wrapper.appendChild(widgetScript);
    };

    delay = () => {
        setTimeout(() => this.setState({show: true}), 5000);
    };

    render() {
        const { show } = this.state;

        const widgetStyle = {
            opacity: show ? '1' : '0',
            transition: 'opacity .5s'
        };

        return (
            <div className='clutch'>
                <div className='clutch__content js-hook__clutch'>
                    {show ? null : <Spinner/>}
                    <div className="clutch-widget clutch-widget-desktop"
                         style={widgetStyle}
                         data-url="https://clutch.co"
                         data-widget-type="4"
                         data-expandifr="true"
                         data-height="446"
                         data-snippets="true"
                         data-clutchcompany-id="161995"/>
                    <div className="clutch-widget clutch-widget-mobile"
                         style={widgetStyle}
                         data-url="https://clutch.co"
                         data-widget-type="3"
                         data-expandifr="true"
                         data-height="446"
                         data-snippets="true"
                         data-clutchcompany-id="161995"/>
                </div>
            </div>
        )
    }
}