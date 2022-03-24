import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Portfolio | Juan Trochez</title>
                <meta name="description" content="Portfolio Juan Trochez, développeur front-end, javascript, react, angular, vue, stencilJS..." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital@1&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                      rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
