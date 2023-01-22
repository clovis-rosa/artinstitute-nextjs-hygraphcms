import Image from 'next/image'
import Link from 'next/link'

type Props = {
  exhibitions: Exhibitions[]
}

export default function LastetExhibition({ exhibitions }: Props) {
  return (
    <>
      {/* Latest Exhibition */}
      <li key={exhibitions[0].slug}>
        <Link href={`/exhibition/${exhibitions[0].slug}`}>
          <Image
            src={exhibitions[0].image.url}
            alt={exhibitions[0].slug}
            width={600}
            height={400}
          />
          <h1>{exhibitions[0].title}</h1>
          <p>{exhibitions[0].description}</p>
        </Link>
      </li>
    </>
  )
}
