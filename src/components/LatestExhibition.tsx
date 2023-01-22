import Image from 'next/image'
import Link from 'next/link'
import { styled } from 'styled-components'

type Props = {
  exhibition: Exhibitions[]
}

export default function LastetExhibition({ exhibition }: Props) {
  return (
    <>
      {/* Latest Exhibition */}
      <StyledHighlight>
        <HighlightImage>
          <Link href={`/exhibition/${exhibition[0].slug}`}>
            <Image
              src={exhibition[0].image.url}
              alt={exhibition[0].slug}
              width={800}
              height={610}
            />
          </Link>
        </HighlightImage>
        <HighlightText>
          <h1>{exhibition[0].title}</h1>
          <p>{exhibition[0].description}</p>
        </HighlightText>
      </StyledHighlight>
    </>
  )
}

const StyledHighlight = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`

const HighlightImage = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  height: auto;
  // Sets one column free here so the text block can fill the empty space

  a {
    img {
      width: 100% !important;
      height: auto !important;
    }
  }
`

const HighlightText = styled.div`
  h1 {
    /* font-family: 'inter'; */
    font-size: 3.125rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.025em;
  }

  p {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    letter-spacing: normal;
  }
`
