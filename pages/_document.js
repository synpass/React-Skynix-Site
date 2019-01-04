import Document, { Head, Main, NextScript } from 'next/document';
import Service from "../components/resources/service";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        let limit = 0;
        let property;
        await Service.getCatalogByPage(1)
            .then(async(response) => {

                const {success, error, totals} = response;
                let {data} = response;

                if (success) {
                    if (limit) {
                        data = data.reverse();
                        data.splice(0, data.length - limit);
                    }

                    let promises = [];

                    data.forEach(item => {
                        promises.push(Service.getPostMedia(item.featured_media));
                        promises.push(Service.getAuthor(item.author));
                    });

                    await Promise.all(promises).then(response => {

                        data.map((item, i) => {
                            const {success: mediaSuccess, data: mediaData} = response[2 * i];
                            const {success: authorSuccess, data: authorData} = response[2 * i + 1];

                            if (mediaSuccess) item.imageUrl = mediaData.source_url;
                            if (authorSuccess) item.authorName = authorData.name;
                        });

                    })
                    property = {
                        blogItems: data,
                        blogTotals: totals
                    }
                }
            })
        return {...initialProps, property: "test"}
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