import 'tailwindcss/tailwind.css'

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
      TagManager.initialize({ gtmId: 'GTM-TQ7LNMH' });
  }, []);
  return <Component {...pageProps}/>
}
export default MyApp