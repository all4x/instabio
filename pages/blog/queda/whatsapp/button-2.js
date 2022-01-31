
import Head from 'next/head';
import React from 'react';

import Iphone from '/public/Iphone-spinner-2.gif'

import Image from 'next/image';

function index() {
  return (
        <div>
            <Head>
            <meta name="title" content="Nylde Cosmeticos | Whatsapp"/>
            <meta http-equiv="refresh" content="0;https://api.whatsapp.com/send?phone=5563992072188&text=Ola%2C%20gostaria%20de%20realizar%20a%20compra%20do%20meu%20NEW%20HAIR!" />
            </Head>
                <div class="h-screen bg-white">
        <div class="flex justify-center items-center h-full">
        <Image className='h-16 w-16' src={Iphone}></Image>
        </div>

        </div>
        </div>
  )
}
export default index;


// https://api.whatsapp.com/send?phone=5563992072188&text=Ola%2C%20gostaria%20de%20realizar%20a%20compra%20do%20meu%20NEW%20HAIR!%20*cupom%3ANYLDE20*