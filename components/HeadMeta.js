import React from 'react'
import Head from 'next/head'

const HeadMeta = ({ seo }) => {
    return (
        <Head>
            <title>{seo.title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />

            {seo.desc && <meta name="description" content={seo.desc} />}
            {seo.schema && <script type="application/ld+json">{JSON.stringify(seo.schema)}</script>}
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="noindex" />
        </Head>
    )
}

export default HeadMeta