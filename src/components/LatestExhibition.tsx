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
      </StyledHighlight>
      <HighlightText>
        <h1>{exhibition[0].title}</h1>
        <p>{exhibition[0].description}</p>
      </HighlightText>
    </>
  )
}

const StyledHighlight = styled.article`
  grid-area: highlight;
  grid-column-start: 1;
  grid-column-end: 3;
  // Sets one column free here so the text block can fill the empty space
`

const HighlightImage = styled.div`
  height: auto;

  img {
    width: 100% !important;
    height: auto !important;
  }
`

const HighlightText = styled.div``
