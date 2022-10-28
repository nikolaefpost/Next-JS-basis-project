import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";
import React from "react";


export default class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }
    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head>
                    {/*<meta property="og:site_name" content="tallinngamingsummit.com/"/>*/}
                    {/*<meta property="og:type" content="website"/>*/}
                    {/*<meta property="og:title" content="The Best 2022 Gaming Summit"/>*/}
                    {/*<meta property="og:url" content="https://tallinngamingsummit.com/"/>*/}
                    {/*<meta property="og:image" itemProp="image primaryImageOfPage"*/}
                    {/*      content="https://tallinngamingsummit.com/tgs.png"/>*/}
                    {/*<meta property="og:image:type" content="image/png"/>*/}
                    {/*<meta property="og:image:width" content="1200"/>*/}
                    {/*<meta property="og:image:height" content="675"/>*/}
                    {/*<meta name="keywords" content="gaming, gaming summit, tallinn"/>*/}

                    {/*<meta name="twitter:card" content="summary"/>*/}
                    {/*<meta name="twitter:title" content="The Best 2022 Gaming Summit"/>*/}
                    {/*<meta name="twitter:image" content="https://tallinngamingsummit.com/tgs.png"/>*/}
                    <title>Next-basic</title>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}