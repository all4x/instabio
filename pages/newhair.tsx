import Image from 'next/image';
import Link from 'next/link';


import Newhair from '../public/newhair.jpg'
import Topbar from '../components/Topbar'

import Footer from '../components/Redes-footer'

import React from 'react';

function newhair() {
  return <div>
      <Topbar/>
      <div className='m-6 max-w-full lg:ml-auto flex justify-center'>
      <Image src={Newhair} height={400} width={400}/>
      
      
      </div>
      
     
      <div className='mx-5 text-center font-sans text-xl text-black '>
                <div className='xl:mx-6 '>
                <h2 className='text-3xl p-2 text-gray-900'>O blend de vitaminas número 1º do Brasil.</h2>
                <p className='px-5 py-2 text-xl text-left text-gray-900'>Composto por minerais, aminoácidos, vitaminas e antioxidantes, o New Hair combate a queda capilar em até 96%.
                Além disso promove um crescimento acelerado dos fios em até 6x mais rápido e renova cabelo pele e unhas.
                Com apenas uma cápsula ao dia, é possível notar resultados incríveis na hidratação, brilho e comprimento dos seus fios.</p>


                </div>
              
            </div>
            
      
            <h1 className=' text-center text-3xl font-black animate-pulse p-4'>Peça o seu!👇</h1>
            <div className='font-semibold'>
                 
            </div>
          
            <div className='text-center mt-5 p-4'>
          <Link href="https://api.whatsapp.com/send?phone=5563992072188&text=Ola%2C%20gostaria%20de%20realizar%20a%20compra%20do%20meu%20NEW%20HAIR!">
          <button  className="p-2 pl-16 pr-16 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Whatsapp</button>
          </Link>
      </div> 
      <p className='text-center text-gray-600  mx-6'>frete gratis para toda Araguaína em até 2 dia útil</p>
    <Footer/>
  </div>;
}

export default newhair;
