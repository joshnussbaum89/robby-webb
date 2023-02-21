import Head from 'next/head'
import config from '../config'

export default function SEO({ subTitle, description, url, image }) {
  const { siteTitle, siteDescription, siteUrl, siteImage } = config

  return (
    <Head>
      <title>{`${siteTitle} | ${subTitle}`}</title>
      <meta name="description" content={description || siteDescription} />
      <meta property="og:title" content={`${siteTitle} | ${subTitle}`} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:image" content={image || siteImage} />
    </Head>
  )
}
