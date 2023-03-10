import { GetServerSideProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'

import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'
import SiteLayout from '@/layouts/SiteLayout'

type Props = {
  exhibitions: Exhibitions[]
}

export default function ExhibitionPage({ exhibitions }: Props) {
  return (
    <SiteLayout pageTitle="Exhibitions">
      <Container>
        <InfoCard>
          <p>
            <strong>Meaning of Lorem Ipsum. </strong>Lorem ipsum was
            purposefully designed to have no meaning, but appear like real text,
            making it the perfect placeholder.
          </p>
        </InfoCard>

        <ExhibitionGrid>
          {exhibitions.map(({ id, slug, title, description, image }) => (
            <article key={id}>
              <Link href={`/exhibitions/${slug}`}>
                <Image src={image.url} alt={slug} width={600} height={400} />
                <h1>{title}</h1>
                <p>{description}</p>
              </Link>
            </article>
          ))}
        </ExhibitionGrid>
      </Container>
    </SiteLayout>
  )
}

const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`

const InfoCard = styled.div``

const ExhibitionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`

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
          url(transformation: { document: { output: { format: webp } } })
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
