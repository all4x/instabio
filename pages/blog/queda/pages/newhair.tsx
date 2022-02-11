import Image from 'next/image';
import Link from 'next/link';
import Feedback2 from '../../../../public/photo4904871619063819029.jpg'

import Newhair from '../../../../public/newhair.jpg'
import React from 'react';
import Feedback1 from '../../../../public/D_NQ_NP_637796-MLB32708033593_102019-O.jpg'


function newhair() {
  return <div>
      <div className='m-6 max-w-full lg:ml-auto flex justify-center'>
            <div className='m-5 xl:hidden '>
              <div>
              <Image src={Feedback2}/></div>
              <div>
              <Image src={Feedback1} height={320}/>
              </div>

            </div>
          </div>
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
