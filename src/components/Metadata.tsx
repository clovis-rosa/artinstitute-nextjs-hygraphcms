import Head from 'next/head'
import { useRouter } from 'next/router'

export function Metadata({ pageTitle, description, date }: SeoProps) {
  const router = useRouter()
  const meta = {
    name: 'Sao Paulo Institute of Art',
    twitter: '@spiart',
    title: 'Inspiring wonder through the power of art.',
    description: `We enriches the community by collecting, preserving, and making accessible outstanding works of art from the world’s diverse cultures.`,
    image: '/og.jpg',
    website: 'https://spiart.vercel.app',
    type: 'website',
  }

  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico"></link>

      <title>{`${meta.name} | ${pageTitle ? pageTitle : meta.title}`}</title>
      <meta
        name="description"
        content={description ? description : meta.description}
      />
      {date && <meta property="article:published_time" content={date} />}
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      ></meta>
      <meta name="theme-color" content="#ffffff"></meta>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.website}${router.asPath}`} />
      <link rel="canonical" href={`${meta.website}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.name} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={`${meta.name} - ${meta.title}`} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.twitter} />
      <meta name="twitter:title" content={`${meta.name} - ${meta.title}`} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  )
}
