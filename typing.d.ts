type Exhibitions = {
  date: string
  description: string
  id: string
  slug: string
  title: string
  subtitle?: string
  content: {
    html: string
  }
  image: {
    id: string
    url: string
  }
  exhibition: {
    date: string
    description: string
    id: string
    slug: string
    title: string
    subtitle?: string
    content: {
      html: string
    }
    image: {
      id: string
      url: string
    }
    0?: any
  }
}

type SeoProps = {
  pageTitle: string
  description?: string
  date?: string
}

interface LayoutProps extends SeoProps {
  children: React.ReactNode
}
