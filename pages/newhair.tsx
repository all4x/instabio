import Link from 'next/link';
import Newhair from '../public/newhair.jpg'
import React from 'react';
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'
import Fios from  '../public/quedacabelo.jpg.webp'
import Image from 'next/image';

function newhair() {
  return <div className='bg-gray-50'>

    <Topbar/> 
    {/* ALOPACIA TITLE */}
  
                <div className="mt-[5%] flex justify-center scale-90">
                    <Image src={Fios} height={360} width={360}/>
                </div>
                <div className="mr-5 mb-10 flex justify-center">
                    <div className="font-bold text-left text-3xl px-2 ml-6 bg-pink-500 text-gray-50 shadow-xl xl:w-1/2 ">
                        <h1>Cabelo por toda a casa? Conheca o melhor suplemento para o seus fios...</h1>
                    </div>
                </div>
               
                   

           

      <div className='m-6 max-w-full lg:ml-auto flex justify-center'>
      
      
      
      </div>
      
     
      <div className='mx-5 text-center font-sans text-xl text-black '>
                <div className='xl:mx-6 '>
               
                <Image src={Newhair} height={400} width={400}/>
                <h2 className='text-3xl pb-4 text-gray-900'>O blend de vitaminas número 1º do Brasil.</h2>
                <p className=' py-2 text-xl text-left text-gray-900'> Diminui a queda em 96%, Promove um crescimento acelerado dos fios em até 6x mais rápido e renova cabelo pele e unhas.
                Com apenas uma cápsula ao dia, é possível notar resultados incríveis na hidratação, brilho e comprimento dos seus fios.</p>


                </div>
              
            </div>
            
      
            <h1 className=' text-center text-3xl font-black animate-pulse p-4'>Peça o seu!👇</h1>
            <div className='text-center font-thin text-lg'>
                 por apenas R$57,90
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
