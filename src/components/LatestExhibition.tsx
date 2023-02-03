import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  exhibition: Exhibitions[]
}

export default function LastetExhibition({ exhibition }: Props) {
  return (
    <>
      <HighlightCard>
        <HighlightImage>
          <Link href={`/exhibitions/${exhibition[0].slug}`}>
            <Image
              src={exhibition[0].image.url}
              alt={exhibition[0].slug}
              width={800}
              height={610}
            />
          </Link>
        </HighlightImage>
        <HighlightText>
          <h2>Coming soon</h2>
          <h1>{exhibition[0].title}</h1>
          <h3>
            A Special Exhibition Designed by Oscar-Winning Artistic Director
          </h3>
          <p>{exhibition[0].description}</p>
          <Link href="/visit">Plan Your Visit</Link>
        </HighlightText>
      </HighlightCard>
      <InfoCard>
        <p>
          <strong>Stay Informed. </strong>Sign up to receive bimonthly emails
          from Mia.
        </p>
      </InfoCard>
    </>
  )
}

const HighlightCard = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`

const HighlightImage = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  height: auto;

  a {
    img {
      width: 100% !important;
      height: auto !important;
    }
  }
`

const HighlightText = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.025em;

    margin-bottom: 0.875rem;
  }

  h1 {
    font-size: 3.125rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.025em;
    margin-bottom: 0.875rem;
  }

  h3 {
    font-size: 1.03rem;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: normal;
    margin-top: 1.25rem;
    margin-bottom: 0;
  }

  a {
    display: inline-block;
    font-size: 1.03rem;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: -0.01;
    margin-top: 1.25rem;
    margin-bottom: 1rem;
    text-decoration: none;

    color: rgba(35, 31, 32, 0.85);
    border-bottom: 1px solid rgba(35, 31, 32, 0.85);
    transition: all 0.2s ease-in-out;

    &:hover {
      color: black;
      border-bottom: 1px solid black;
    }
  }
`

const InfoCard = styled.div``
