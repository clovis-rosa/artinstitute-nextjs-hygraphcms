import { createGlobalStyle } from 'styled-components'

import { Inter } from '@next/font/google'

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const GlobalStyle = createGlobalStyle`

:root {
  --font-inter: ${fontInter.style.fontFamily};

  /* COLORS */
  --clr-black: #231f20;
  --clr-white: #fff;

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
  text-rendering: optimizeLegibility;
  font-family: var(--font-inter), sans-serif;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  min-width: 320px;

  color: var(--clr-black);
  background-color: var(--clr-white);
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.1;
  letter-spacing: -0.025em;
  overflow-wrap: break-word;
}

p {
  line-height: 1.5;
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}


`
