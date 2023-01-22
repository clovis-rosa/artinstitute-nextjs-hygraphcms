import Image from 'next/image'
import Link from 'next/link'

type Props = {
  exhibitions: Exhibitions[]
}

export default function Exhibitions({ exhibitions }: Props) {
  // Return the array minus the first element
  const [, ...rest] = exhibitions

  return (
    <>
      {rest.map(({ id, slug, title, description, image }) => (
        <article key={id}>
          <Link href={`/exhibition/${slug}`}>
            <Image src={image.url} alt={slug} width={600} height={400} />
            <h1>{title}</h1>
            <p>{description}</p>
          </Link>
        </article>
      ))}
    </>
  )
}
