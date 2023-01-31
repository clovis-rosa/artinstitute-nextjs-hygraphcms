import { GetServerSideProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import { styled } from 'styled-components'

import SiteLayout from '@/layouts/SiteLayout'
import LastetExhibition from '@/components/LatestExhibition'
import Exhibitions from '@/components/Exhibitions'

type Props = {
  exhibitions: Exhibitions[]
}

export default function Home({ exhibitions }: Props) {
  return (
    <SiteLayout pageTitle="Home">
      <Section>
        <LastetExhibition exhibition={exhibitions} />
        <InfoCard>
          <p>
            <strong>Stay Informed. </strong>Sign up to receive bimonthly emails
            from Mia.
          </p>
        </InfoCard>
      </Section>
      <Section>
        <Exhibitions exhibitions={exhibitions} />
      </Section>
    </SiteLayout>
  )
}

const Section = styled.section`
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 2rem;
`

const InfoCard = styled.div``

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
