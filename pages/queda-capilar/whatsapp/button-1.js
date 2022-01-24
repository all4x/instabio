

import Head from 'next/head';
import React from 'react';

function index() {
  return (
        <div>
            <Head>
            <meta name="title" content="Nylde Cosmeticos | Whatsapp"/>
            
            </Head>
                <div className='m-3 flex flex-col items-center justify-center min-h-screen text-3xl font-light text-center'>
                <h1 className='font-bold text-gray-500'>Tudo certo!</h1>
                <h2 className='text-xl'> Click no botao abaixo para ser direcionado para o whatsapp.</h2>
                <a href="https://api.whatsapp.com/send?phone=5563992072188&text=Ola%2C%20gostaria%20de%20baixar%20meu%20cronograma%20capilar%20%F0%9F%A5%B0%20"><button class="m-6 p-2 pl-16 pr-16 bg-yellow-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Download</button></a>

                </div>
        </div>
  )
}
export default index;
