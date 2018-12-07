
/*
 * Overriding App component.
 * Now it is used only for defining should we show preloading intro animation (state rendered) or not
 * Feel free to remove this file if you don't need this animation anymore
*/

import React from 'react'
import App, {Container} from 'next/app'

export default class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            rendered: false
        }
    }
    componentDidMount() {
        this.setState({rendered: true});
    }

    render () {
        const {Component, pageProps} = this.props;
        return (
            <Container>
                <Component {...pageProps} {...this.state} />
            </Container>
        )
    }
}