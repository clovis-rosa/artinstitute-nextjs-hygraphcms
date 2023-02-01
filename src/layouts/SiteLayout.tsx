import Navigation from '@/components/Navigation'
import { Metadata } from '@/components/Metadata'

interface LayoutProps {
  children: React.ReactNode
  pageTitle?: string
  title?: string
  description?: string
  date?: string
}

export default function SiteLayout({
  pageTitle,
  title,
  description,
  date,
  children,
}: LayoutProps) {
  return (
    <>
      <Metadata
        pageTitle={pageTitle}
        title={title}
        description={description}
        date={date}
      />
      <Navigation />
      <main>{children}</main>
    </>
  )
}
