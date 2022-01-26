
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';

import Iphone from '/public/Iphone-spinner-2.gif'



const convertion = () => {
  return <div>
        <Head>
            <meta http-equiv="refresh" content="0;https://app.monetizze.com.br/r/AFN18833790?src=PaginaDeVendasLouja" />
        </Head>
                <div class="h-screen bg-gray-50">
        <div class="flex justify-center items-center h-full">
        <Image className='h-16 w-16' src={Iphone}></Image>
        </div>

        </div>
        </div>;
};

export default convertion;
