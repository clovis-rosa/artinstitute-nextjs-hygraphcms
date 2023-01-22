import Image from 'next/image'
import Link from 'next/link'
import { styled } from 'styled-components'

type Props = {
  exhibitions: Exhibitions[]
}

export default function Exhibitions({ exhibitions }: Props) {
  // Return the 3 itens from the array minus the first element
  const [, ...rest] = exhibitions.slice(0, 4)

  return (
    <>
      {rest.map(({ id, slug, title, description, image }) => (
        <ExhibitionCard key={id}>
          <Link href={`/exhibition/${slug}`}>
            <Image src={image.url} alt={slug} width={600} height={400} />
            <h1>{title}</h1>
            <p>{description}</p>
          </Link>
        </ExhibitionCard>
      ))}
    </>
  )
}

const StyledExhibitions = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* gap: 2.5rem; */
  grid-area: exhibition;
`

const ExhibitionCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`
