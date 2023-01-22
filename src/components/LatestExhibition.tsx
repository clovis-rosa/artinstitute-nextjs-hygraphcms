import Image from 'next/image'
import Link from 'next/link'

type Props = {
  exhibition: Exhibitions[]
}

export default function LastetExhibition({ exhibition }: Props) {
  return (
    <>
      {/* Latest Exhibition */}
      <article>
        <Link href={`/exhibition/${exhibition[0].slug}`}>
          <Image
            src={exhibition[0].image.url}
            alt={exhibition[0].slug}
            width={600}
            height={400}
          />
          <h1>{exhibition[0].title}</h1>
          <p>{exhibition[0].description}</p>
        </Link>
      </article>
    </>
  )
}
