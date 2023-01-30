import { createGlobalStyle } from 'styled-components'

import { Inter } from '@next/font/google'

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const GlobalStyle = createGlobalStyle`

:root {
  --font-inter: ${fontInter.style.fontFamily};
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

*, 
*::before, 
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body { 
  height: 100%;
}

body {
  font-family: var(--font-inter);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
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
