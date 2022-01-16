


import React from 'react';

function cta() {
  return <div>

      <h1 className=' text-center text-2xl font-black animate-pulse p-4'>Peça o seu! direto no Whatsapp👇</h1>
      {/*whatsapp*/}
      <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
        
                <div  className="text-center">
                    <a href="https://api.whatsapp.com/send?phone=5563992072188&text=Ola%2C%20gostaria%20de%20realizar%20a%20compra%20do%20meu%20NEW%20HAIR!"><button class="p-2 pl-5 pr-5 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Whatsapp</button></a>
            </div>
                </div>

                <p className='text-center text-gray-900 mb-12'>frete gratis para toda Araguaína em até 1 dia útil</p>
  </div>;
}

export default cta;
