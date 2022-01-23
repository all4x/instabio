import 'tailwindcss/tailwind.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from 'lib/gtag'
import Analytics from 'components/Analytics'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}



function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default App