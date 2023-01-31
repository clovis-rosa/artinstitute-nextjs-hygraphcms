import { createGlobalStyle } from 'styled-components'

import { Inter } from '@next/font/google'

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const GlobalStyle = createGlobalStyle`

:root {
  --font-inter: ${fontInter.style.fontFamily};

}

*, 
*::before, 
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html, body { 
  height: 100%;
}

body {
  font-family: var(--font-inter), sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  min-width: 320px;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}


`
