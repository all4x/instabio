import Head from 'next/head'
import Link from 'next/link'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'




export default function Home() {
    return(
        <div className=''>
        <Head>        
          <meta name="title" content="Nylde Cosmeticos | New Detox"/>
          <link rel="icon" href="/detox.png" />
          <meta name="description" content="New Detox possui fórmula 100% natural que contém ingredientes potentes capazes de agilizar o processo de emagrecimento, sem precisar sair de casa para academia"/>
        </Head> 
        <div className='mt-[-10%]  flex flex-col items-center justify-center h-screen  text-3xl font-light text-center'>
        <h1 className='font-bold text-gray-500 '>Tudo certo!</h1>
        <h2 className='text-xl mx-5'>Click em continuar para ser direcionado para a página solicitada.</h2>
        
        
        
        <div>
           
           
        
            <div class="m-2 p-4">
            <Link href="/remarketing">
                <button type="button" class='flex max-w-sm w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-3xl uppercase font-bold shadow-md mx-auto p-3 rounded-2xl'>
                    <div class="flex sm:flex-cols-12 ">
                        <div class="col-span-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                        </div>
                        <h1>Continuar</h1>
                        <div class="col-span-2 pt-3"></div>
                    </div>    
                </button>
                </Link>
            </div>
        </div>
    </div>
    <div>
        <div>
            <h2 class="text-2xl mb-4 text-gray-700 font-bold"></h2>
            <hr class="bg-gray-500 w-full h-0.25 mb-5"/>
        
        
        </div>
        </div>
        <Footer/>
        </div>
    )
}
//           https://app.monetizze.com.br/r/AFN18833790?src=PaginaDeVendasLouja
//          <meta http-equiv="refresh" content="0;https://app.monetizze.com.br/r/AFN18833790?src=PaginaDeVendasLouja" />
