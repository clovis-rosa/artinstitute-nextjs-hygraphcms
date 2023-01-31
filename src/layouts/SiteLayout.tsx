import Navigation from '@/components/Navigation'
import { Metadata } from '@/components/Metadata'

interface LayoutProps {
  children: React.ReactNode
  pageTitle?: string
}

export default function SiteLayout({ pageTitle, children }: LayoutProps) {
  return (
    <>
      <Metadata pageTitle={pageTitle} />
      <Navigation />
      <main>{children}</main>
    </>
  )
}
