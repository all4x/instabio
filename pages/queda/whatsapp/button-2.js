
import Pixel from '../src/Pixel'
import Head from 'next/head';
import React from 'react';

function index() {
  return (
        <div>
            <Head>
            <meta name="title" content="Nylde Cosmeticos | Whatsapp"/>
            
            </Head>
            <Pixel name='FACEBOOK_PIXEL_1' />
                <div className='m-3 flex flex-col items-center justify-center min-h-screen text-3xl font-light text-center'>
                <h1 className='font-bold text-gray-500'>Tudo certo!</h1>
                <h2 className='text-xl'>Click no botao abaixo para ser direcionado para o whatsapp.</h2>
                <a href="https://api.whatsapp.com/send?phone=5563992072188&text=Ola%2C%20gostaria%20de%20realizar%20a%20compra%20do%20meu%20NEW%20HAIR!"><button class="m-6 p-2 pl-16 pr-16 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Download</button></a>

                </div>
        </div>
  )
}
export default index;
