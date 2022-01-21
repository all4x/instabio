
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
          <div className='text-center font-normal text-xl mt-12 px-2'>
              <h1>Tudo bem? me chamo Erenilde e sou formada em <strong>Terapia Capilar</strong>  pela ABT|intimus cosméticos em <strong> Araguaína-To  </strong> </h1>
              <h1 className='text-center text-3xl font-extrabold pt-10'>Queda de cabelo em excesso</h1>
              <p className='px-5 py-2 text-xl text-left text-gray-900'>Atualmente, cerca de 30% dos homens e 10% das mulheres apresentam algum grau de alopecia durante a vida, podendo ser desencadeado por fatores genéticos, química, estresse e até mesmo lavagem incorreta da região.</p>
              <h2>Pensando nisso, fiz um <strong>cronograma gratuito</strong>  para deixar seu cabelo saudável </h2>
          </div>
           {/*Botão de baixar cronograma*/}
           <div className='text-center mt-5'>
           <a href="https://api.whatsapp.com/send?phone=5563992072188&text=Ola%2C%20gostaria%20de%20baixar%20meu%20cronograma%20capilar%20%F0%9F%A5%B0%20"><button class="p-2 pl-16 pr-16 bg-yellow-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Download</button></a>
           </div>


          <div>

          </div>
        </div>
     
    
  )
}

export default nugget;
