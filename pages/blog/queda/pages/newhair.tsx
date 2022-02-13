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



  </div>;
}

export default newhair;
