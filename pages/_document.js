import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }
    render() {
        return (
            <html lang='en'>
                <Head>
                    <meta name="robots" content="noindex, unfollow"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"/>
                    <link rel="stylesheet" href="owl-carousel/owl.theme.css"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }

}