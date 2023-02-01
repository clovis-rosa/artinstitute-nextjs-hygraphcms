import Navigation from '@/components/Navigation'
import { Metadata } from '@/components/Metadata'

export default function SiteLayout({
  pageTitle,
  description,
  date,
  children,
}: LayoutProps) {
  return (
    <>
      <Metadata pageTitle={pageTitle} description={description} date={date} />
      <Navigation />
      <main>{children}</main>
    </>
  )
}
