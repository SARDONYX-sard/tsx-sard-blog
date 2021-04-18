import { AppProps } from 'next/app'

import '../styles/reset.css'

import '../styles/global.css'
import 'highlight.js/styles/atom-one-dark.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
