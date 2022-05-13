import Head from 'next/head'

export default function CustomHead() {
    return (
        <Head>
            <title>Joel Adving</title>
            <meta
                name="viewport"
                key="viewport"
                content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=10.0, minimal-ui, viewport-fit=cover"
            />
            <meta name="title" content="Joel Adving" />
            <meta
                name="description"
                content="Stockholm, Sweden based front-end developer with a focus on design, user experience and accessability."
            />
            <link rel="alternate icon" type="image/png" href="/favicon.png" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <meta name="theme-color" content="#99f6e4" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.joeladving.com/" />
            <meta property="og:title" content="Joel Adving" />
            <meta
                property="og:description"
                content="Stockholm, Sweden based front-end developer with a focus on design, user experience and accessability."
            />
            <meta property="og:image" content="https://www.joeladving.com/preview.png" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.joeladving.com/" />
            <meta property="twitter:title" content="Joel Adving" />
            <meta
                property="twitter:description"
                content="Stockholm, Sweden based front-end developer with a focus on design, user experience and accessability."
            />
            <meta property="twitter:image" content="https://www.joeladving.com/preview.png" />
        </Head>
    )
}
