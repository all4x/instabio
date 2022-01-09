import Head from "next/head"

function index() {
    return (

        <div className="xl:hidden">
          <Head>
          <meta name="title" content="Nylde Cosmeticos | Magnolia"/>
         
          <meta name="description" content="New Detox possui fórmula 100% natural que contém ingredientes potentes capazes de agilizar o processo de emagrecimento, sem precisar sair de casa para academia"/>
          </Head>
                  <div class="bg-white">
        <div>
            <div class="bg-purple-400 font-bold py-4 shadow-lg text-white flex justify-center">
                <h1 class="text-xl text-center">⚡️ CORRE PARA APROVEITAR!⚡️ </h1>
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

    <a href="https://app.monetizze.com.br/r/AFN18833790?src=magnolia">
        <div class="bg-purple-400 font-bold py-4 shadow-lg text-white flex justify-center m-10 rounded-full">
            <h1 class="text-xl text-center">Ativar</h1>
        </div>

    </a>

    </div>
        </div>
    )
}

export default index

