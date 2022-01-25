import 'tailwindcss/tailwind.css'

import { useRouter } from 'next/router'
import * as ga from '../lib/ga'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';




function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
      TagManager.initialize({ gtmId: 'GTM-TQ7LNMH' });
      
      
      const handleRouteChange = (url) => {
        ga.pageview(url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }

    }, [router.events]);
  return <Component {...pageProps}/>
  
}


export default MyApp