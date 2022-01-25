


import Head from 'next/head';
import Link from 'next/link'
import Script from 'next/script'


function cta() {
  return <div>
      <Head>
      
              
      </Head>
      <h1 className=' text-center text-2xl font-black animate-pulse p-4'>Peça o seu! direto no Whatsapp👇</h1>
      <p className='text-center'>Por apenas 57,90</p>
      {/* Script button convertion google ads */}
        

      
      {/*whatsapp*/}
    
      <div className=" text-4xl bg-opacity-25  text-black rounded-full p-2">
        
                <div  className="text-center">
                  
                  <Link href="/queda-capilar/whatsapp/button-2">
                  
                  <button class="p-2 pl-16 pr-16 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Whatsapp</button>
                  </Link>
                  
            </div>
                </div>

                <p className='text-center text-gray-600  mx-6'>frete gratis para toda Araguaína em até 1 dia útil</p>
  </div>;
}

export default cta;
