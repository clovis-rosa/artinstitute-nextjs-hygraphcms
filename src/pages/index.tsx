import Head from 'next/head'
import Image from 'next/image'

import { GetServerSideProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import Link from 'next/link'

type Props = {
  exhibitions: Exhibitions[]
}

export default function Home({ exhibitions }: Props) {
  // console.log(`====> Exhibitions`, exhibitions);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {exhibitions.map((exhibition) => (
          <li key={exhibition.slug}>
            <Link href={`/exhibition/${exhibition.slug}`}>
              <h1>{exhibition.title}</h1>
            </Link>
          </li>
        ))}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = new GraphQLClient(
    process.env.NEXT_PUBLIC_GRAPHCMS_URL as string
  )

  const query = gql`
    query Exhibitions {
      exhibitions {
        id
        slug
        title
        date
        image {
          url(transformation: { image: { resize: { fit: max } } })
        }
        description
      }
    }
  `
  const data = await client.request(query)

  return {
    props: { exhibitions: data.exhibitions },
  }
}
