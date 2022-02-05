import Image from 'next/image';
import Link from 'next/link';


import Newhair from '../../../../public/newhair.jpg'


import React from 'react';

function newhair() {
  return <div>

      <div className='m-6 max-w-full lg:ml-auto flex justify-center'>
      <Image src={Newhair} height={400} width={400}/>
      </div>


      <div className='mx-5 text-center font-sans text-xl text-black '>
                <div className='xl:mx-6 '>
                <h2 className='text-3xl p-2 text-gray-900'>O blend de vitaminas número 1º do Brasil.</h2>
                <p className=' py-2 text-xl text-left text-gray-900'>Promove um crescimento acelerado dos fios em até 6x mais rápido e renova cabelo pele e unhas.
                Com apenas uma cápsula ao dia, é possível notar resultados incríveis na hidratação, brilho e comprimento dos seus fios.</p>


                </div>
            </div>

  </div>;
}

export default newhair;
