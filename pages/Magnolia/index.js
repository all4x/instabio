

import Footer from '/components/Footer'
import Head from "next/head"

function index() {
    return (

        <div className="xl:hidden">
          <Head>
          <meta name="title" content="Nylde Cosmeticos | Magnolia"/>
          <link rel="icon" href="/detox.png" />
          <meta name="description" content="New Detox possui fórmula 100% natural que contém ingredientes potentes capazes de agilizar o processo de emagrecimento, sem precisar sair de casa para academia"/>
          </Head>
                  <div class="bg-white">
        <div>
            <div class="bg-purple-400 font-bold py-4 shadow-lg text-white flex justify-center">
                <h1 class="text-2xl text-center">⚡️ CORRE PARA APROVEITAR!⚡️ </h1>
            </div>
            <div class="text-center my-7">
            </div>
                <div>
                        <div class="bg-gray-100 border-4 box-border rounded-lg items-center m-5 px-4  font-normal">
                            <h1 class="animate-pulse text-center pt-8 text-4xl font-bold text-gray-800">PARÁBENS</h1>
                            <h1 class="py-10 font-sans text-2xl text-center">Voçê foi INDICADA por uma de nossas <span class="text-3xl font-semibold">clientes!</span></h1>
                            <div class="text-center text-base mb-4">
                                <h2>Clique no botão abaixo e ative sua indicação!</h2>
                                </div>   
                         </div>
                        </div>
            </div>
           
            {/* Button */}
            <a href='https://app.monetizze.com.br/r/AFN18833790?src=magnolia'>
            <div class="mb-4">
                <button type="button" class='flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-5'>
                    <div class="flex sm:flex-cols-12 gap-6">
                        <div class="col-span-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                        </div>
                       

                       
                        <div class="col-span-2 pt-1.5">Ativar Convite</div>
                    </div>    
                </button>
            </div>
            </a>
             {/* Button */}

    </div>
        
        <Footer/>
        </div>
    )
}

export default index

