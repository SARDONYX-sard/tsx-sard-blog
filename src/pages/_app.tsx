import { AppProps } from 'next/app'
import router from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'
import '../styles/reset.css'
import '../styles/global.css'
import 'highlight.js/styles/atom-one-dark.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }

    const handleRouteChange = (path: string) => {
      gtag.pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
