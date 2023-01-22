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
    <StyledExhibitions>
      {rest.map(({ id, slug, title, description, image }) => (
        <ExhibitionCard key={id}>
          <Link href={`/exhibition/${slug}`}>
            <Image src={image.url} alt={slug} width={600} height={400} />
            <h1>{title}</h1>
            <p>{description}</p>
          </Link>
        </ExhibitionCard>
      ))}
    </StyledExhibitions>
  )
}

const StyledExhibitions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`

const ExhibitionCard = styled.article`
  a {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
