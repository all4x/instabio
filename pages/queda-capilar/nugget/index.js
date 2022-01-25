
import Image from 'next/image'
import Nylde from '/public/nylde.png'

function nugget() {
  return (
      <div>
        
        
      
     {/* <!-- ====== Hero Section End -->  */}
     
          <div class="hidden lg:block lg:w-1/12 px-4"></div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="lg:text-right lg:ml-auto">
              <div class="relative inline-block z-10 pt-2 lg:pt-0">
                <Image
                  src={Nylde}
                  alt="Erenilde formada em terapia capilar."
                  class="max-w-full lg:ml-auto"
                />
                <span class="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          {/*Descrição*/}
          <div className='text-center font-normal text-2xl mt-12 p-5'>
              <h1>Tudo bem? me chamo Erenilde e sou formada em <strong>Terapia Capilar</strong>  pela ABT|Intimus Cosméticos em <strong> Araguaína-To  </strong> </h1>
              
              
              <div className='bg-gray-50 rounded-xl mt-3 mb-5'>
              <h1 className='text-center text-3xl font-extrabold pt-10'>Queda de cabelo em excesso</h1>
              <p className='px-5 py-2 text-xl text-left text-gray-900'>Atualmente, cerca de 30% dos homens e 10% das mulheres apresentam algum grau de alopecia durante a vida, podendo ser desencadeado por fatores genéticos, química, estresse e até mesmo lavagem incorreta da região.</p>
              
              <h2 className='mt-6 text-xl'>Pensando nisso, fiz um <strong>cronograma gratuito</strong> para deixar seu cabelo mais saudável, voçê pode esta baixando direto pelo whatsapp no botão abaixo </h2>
              <div className='text-center mt-5 p-4'>
           
           <a href="https://www.nyldecosmeticos.com.br/queda-capilar/whatsapp/button-1"><button class="p-2 pl-16 pr-16 bg-yellow-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Download</button></a>
           </div>
              </div>
              
          
          </div>
          {/*Botão de baixar cronograma*/}
        

          <div className='text-left text-2xl ml-6 mt-6 mb-10'>
            <p>Digamos que mesmo assim seu cabelo continua caindo, </p>
            <p>nesse caso o recomendado é agendar uma consulta com um especialista em terapia capilar.</p>
            <p>Mas na maioria dos casos o uso de uma vitamina pode resolver seu problema.</p>
          </div>
           


          <div>

          </div>
        </div>
     
    
  )
}

export default nugget;
