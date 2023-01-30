import { GlobalStyle } from '@/styles/GlobalStyles'
import type { AppProps } from 'next/app'

// import { Inter } from '@next/font/google'

// const fontInter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
// })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <style jsx global>{`
				:root {
					--font-inter: ${fontInter.style.fontFamily};
				}
			}`}</style> */}
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
