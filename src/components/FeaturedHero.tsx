import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import CardInfo from '@/components/CardInfo'

type Props = {
  exhibition: Exhibitions[]
}

export default function FeaturedHero({ exhibition }: Props) {
  // Gets only the first item of the array
  const { slug, title, subtitle, description, image } = exhibition[0]

  return (
    <>
      <StyledHero>
        <HeroImage>
          <Link href={`/exhibitions/${slug}`}>
            <Image src={image.url} alt={title} width={800} height={610} />
          </Link>
        </HeroImage>
        <HeroText>
          <h2>Coming soon</h2>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <p>{description}</p>
          <Link href="/visit">Plan Your Visit</Link>
        </HeroText>
      </StyledHero>
      <CardInfo />
    </>
  )
}

const StyledHero = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`

const HeroImage = styled.div`
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

const HeroText = styled.div`
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
