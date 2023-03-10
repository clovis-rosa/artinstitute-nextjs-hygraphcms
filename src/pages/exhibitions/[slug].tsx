import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import SiteLayout from '@/layouts/SiteLayout'
import { ParsedUrlQuery } from 'querystring'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

// type IEvent = {
//   exhibition: Exhibitions[];
// };

interface IEvent {
  exhibition: {
    id: string
    slug: string
    title: string
    date: string
    image: {
      id: string
      url: string
    }
    description: string
    content: { html: string }
  }
}

export default function Exhibition({ exhibition }: IEvent) {
  // console.log(`====> Exhibitions`, exhibition);

  return (
    <SiteLayout pageTitle={exhibition.title}>
      <article>
        <h1>{exhibition.title}</h1>
        <h3>{exhibition.description}</h3>
        <small>{exhibition.date}</small>
        <img src={exhibition.image.url} alt={exhibition.title} />
        <div dangerouslySetInnerHTML={{ __html: exhibition.content.html }} />
      </article>
    </SiteLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params as ParsedUrlQuery).slug

  // console.log(slug)

  const query = gql`
    query Exhibition($slug: String!) {
      exhibition(where: { slug: $slug }) {
        id
        slug
        title
        date
        description
        image {
          id
          url(transformation: { document: { output: { format: webp } } })
        }
        content {
          html
        }
      }
    }
  `

  const data: { exhibition: IEvent | null } = await client.request(query, {
    slug,
  })

  // console.log(`=====> DATA`, data);

  if (!data.exhibition) {
    return {
      notFound: true,
    }
  }

  // const source = await serialize(data.event.description);

  return {
    // props: { event: { ...data.event, source } },
    props: { exhibition: { ...data.exhibition } },
    // revalidate: 60 * 60,
    // revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Exhibitions {
      exhibitions {
        slug
      }
    }
  `
  const data = await client.request(query)

  // console.log(`====> slug`, data);

  return {
    paths: data.exhibitions.map((exhibition: any) => ({
      params: { slug: exhibition.slug },
    })),
    fallback: 'blocking',
  }
}
