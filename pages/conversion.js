
import Head from 'next/head';
import React from 'react';

import Iphone from '/public/Iphone-spinner-2.gif'

import Image from 'next/image';

function index() {
  return (
        <div>
            <Head>
            <meta name="title" content="Nylde Cosmeticos | Whatsapp"/>
            <meta http-equiv="refresh" content="0;https://app.monetizze.com.br/r/AFN18833790" />
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
