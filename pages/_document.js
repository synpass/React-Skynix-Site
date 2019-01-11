import Document, { Head, Main, NextScript } from 'next/document';
import Service from "../components/resources/service";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return {...initialProps}
    }
    render() {
        return (
            <html lang='en'>
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }

}