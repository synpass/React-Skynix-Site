import React, {Component} from 'react';

export default class Clutch extends Component {

    componentDidMount() {
        this.loadScript();
    }

    loadScript = () => {
        const wrapper = document.querySelector('head');
        const widgetScript = document.createElement('script');
        widgetScript.setAttribute('src', 'https://static1.clutch.co/api/widget.js');
        widgetScript.setAttribute('type', 'text/javascript');
        wrapper.appendChild(widgetScript);
    };

    render() {
        return <div className="clutch-widget" data-url="https://clutch.co" data-widget-type="1" data-height="42" data-clutchcompany-id="161995"/>
    }
}
