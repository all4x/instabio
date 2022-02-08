import Image from 'next/image';
import Link from 'next/link';
import Newhair from '../public/newhair.jpg'
import React from 'react';
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'



function newhair() {
  return <div>
      <Topbar/>
      <div className='m-6 max-w-full lg:ml-auto flex justify-center'>
      <Image src={Newhair} height={400} width={400}/>
      
      
      </div>
      
     
      <div className='mx-5 text-center font-sans text-xl text-black '>
                <div className='xl:mx-6 '>
                <h2 className='text-3xl pb-4 text-gray-900'>O blend de vitaminas número 1º do Brasil.</h2>
                <p className=' py-2 text-xl text-left text-gray-900'> Diminui a queda em 96%, Promove um crescimento acelerado dos fios em até 6x mais rápido e renova cabelo pele e unhas.
                Com apenas uma cápsula ao dia, é possível notar resultados incríveis na hidratação, brilho e comprimento dos seus fios.</p>


                </div>
              
            </div>
            
      
            <h1 className=' text-center text-3xl font-black animate-pulse p-4'>Peça o seu!👇</h1>
            <div className='font-semibold'>
                 
            </div>
          
            <div className='text-center mt-5 p-4'>
          <Link href="/blog/queda/whatsapp/button-2">
          <button  className="p-2 pl-16 pr-16 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Whatsapp</button>
          </Link>
      </div> 
      <p className='text-center text-gray-600  mx-6'>frete gratis para toda Araguaína em até 2 dia útil</p>
   <Footer/>
  </div>;
}

export default newhair;
