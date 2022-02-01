import Link from 'next/link'
import Newhair from '../../newhair';

import Image from 'next/image'
import Nylde from '../../../public/nylde.png'
import Topbar from '../../../components/Topbar';
import Footer from '../../../components/Footer'

const artic = () => {
    return (
        <div>
          <Topbar/>
          <main class="relative container mx-auto bg-white px-4">
            <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
            </div>

            <div class="mt-[-10%] xl:w-1/2 mx-auto">
              <div class="flex justify-center overflow-hidden rounded-2xl">
                <Image class="w-full h-full absolute inset-0 object-cover"  src={Nylde} alt="" />
              </div>
              <h1 className='mt-5 ml-8 '>Oi Tudo bem? me chamo Nylde sou formada em <strong>Terapia Capilar</strong> e estou aqui para te dar um cronograma gratuito para você se livrar da queda capilar.</h1>
            </div>

            <article class="max-w-prose mx-auto py-8">
              <h1 class="text-2xl font-bold mb-5">Queda de cabelo em excesso</h1>
              <p className='text-lg text-left text-black'>Atualmente, 30% das mulheres apresentam algum grau de alopecia (<strong className='font-thin'>alopecia é uma condição em que ocorre perda de cabelo ou de pelo em qualquer parte do corpo.</strong>) durante a vida, podendo ser desencadeado por fatores genéticos, química, estresse e até mesmo lavagem incorreta da região.</p>
              <h2 class="mt-2 text-sm text-gray-500">Nylde, 20 Janeiro  2022</h2>

             

      {/* CHAMADA PRA AÇÃO CRONOGRAMA */}
      <div className='bg-yellow-100 m-4 p-4 shadow-2xl rounded-lg'>
      
      <h1 className='text-center text-3xl mt-2 font-mono'>cronograma capilar</h1> 
                  
                  
      <h2 className='mt-6 text-xl'> Aqui está seu <strong>cronograma gratuito,</strong> para deixar cabelo mais saudável, você pode esta baixando direto pelo whatsapp no botão abaixo </h2>

      <div className='flex justify-center pt-5'>
                        <Link href="/blog/queda/whatsapp/button-1">  
                        <button class="p-2 pl-16 pr-16 bg-white text-gray-900 text-lg rounded-lg focus:border-4 border-green-300">Eu quero!</button>
                        </Link>
                        </div> 


      </div>
      {/* FINALIZANDO  */}

      {/* Cta New Hair */}
      
      <div className='text-left text-2xl ml-6 mt-6 mb-10 space-y-3'>
            <p>Digamos que você ja tem todo cuidado com seu cabelo mas ele não está como vc gostaria.</p>
            <hr></hr>
            <p>Nesse caso o recomendado é consultar um dermatologista para identificar a causa. e orientar o tratamento que pode ser feito com alimentação adequada, remédios, suplementos nutricionais ou shampoos.</p>
            <p>Mas na maioria dos casos o uso de uma vitamina suplemento pode resolver seu problema.</p>
          </div>

          <Newhair/>

            </article>
          </main>
          <Footer/>
        </div>
    );
}

export default artic;