


import React from 'react';
import Head from 'next/head';
import Lead from '/pages/queda-capilar/lead'


function cta() {
  return <div>
      <Head>
            <Lead/>
      </Head>
      <h1 className=' text-center text-2xl font-black animate-pulse p-4'>Peça o seu! direto no Whatsapp👇</h1>
      {/*whatsapp*/}
      <div className=" text-4xl bg-opacity-25  text-black rounded-full p-2">
        
                <div  className="text-center">
                  {<Lead/>}
                  <a onClick={
                    <Lead/>
                  } href="https://www.nyldecosmeticos.com.br/queda-capilar/whatsapp/button-1">
                  
                  <button class="p-2 pl-16 pr-16 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Whatsapp</button>
                  </a>
                  
            </div>
                </div>

                <p className='text-center text-gray-600  mx-6'>frete gratis para toda Araguaína em até 1 dia útil</p>
  </div>;
}

export default cta;
