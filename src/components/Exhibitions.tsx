import Image from 'next/image'
import Link from 'next/link'

interface Props {
  exhibitions: {
    date: string
    description: string
    id: string
    slug: string
    title: string
    content: {
      html: string
    }
    image: {
      id: string
      url: string
    }
  }
}

export default function Exhibitions({ exhibitions }: Props) {
  return (
    <>
      {/* All Exhibitions */}
      <li>
        <Link href={`/exhibition/${exhibitions.slug}`}>
          <Image
            src={exhibitions.image.url}
            alt={exhibitions.slug}
            width={600}
            height={400}
          />
          <h1>{exhibitions.title}</h1>
          <p>{exhibitions.description}</p>
        </Link>
      </li>
    </>
  )
}
