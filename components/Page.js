import React from 'react';
import '../static/scss/app.scss';
import Head from 'next/head'

export default function Page(props) {
    return (
        <div className={props.className}>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {props.children}
        </div>
    )
}