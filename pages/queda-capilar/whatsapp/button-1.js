
import React from 'react';
import Head from 'next/head';
import Script from 'next/script' 
import event from '/lib/gtag'

function index() {
  return (
        <div>
            <Head>
            <meta name="title" content="Nylde Cosmeticos | Whatsapp"/>     
            <meta http-equiv="refresh" content="0;https://api.whatsapp.com/send?phone=5563992072188&text=Ola%2C%20gostaria%20de%20realizar%20a%20compra%20do%20meu%20NEW%20HAIR!" />
            <Script>
              {
              event('event', 'conversion', {'send_to': 'AW-447631009/V2jUCP7T75IDEKGdudUB'})                
              }    
            </Script>
            </Head> 
                <div className='m-3 flex flex-col items-center justify-center min-h-screen text-3xl font-light text-center'>
                <h1 className='font-bold text-gray-500'>Tudo certo!</h1>
                <h2 className='text-xl'>Fique nesta pagina para ser direcionado para o whatsapp.</h2>
                </div>
        </div>
  )
}

export default index;


//            
