import Head from "next/head";
import Main from '../src/components/Main'
import Quadro from '../src/components/Quadro'

import Botaozap from "../src/components/Botaozap";




export default function Home() {
    return(
        <div className="bg-gray-300 px-2">
        <Head>
        <title>Nova Forma De Fazer Dieta</title>
        <meta property="og:title"           content="DietaVirtual" /> 
        <meta property="og:type"            content="article" /> 
        <meta property="og:url"             content="www.nyldecosmeticos.ga/lifitdetox2" /> 

        <link rel="icon" href="/detox.svg" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="author" content="Nylde"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta property="og:description" content="A melhor forma de perde peso"/>  
        </Head>
        <Main></Main>
        <Quadro></Quadro>
        <Botaozap></Botaozap>  
      






        <footer className="flex justify-center text-center">
            <div className='text-base font-normal p-4 text-blue-700 space-x-3 '>  
                <a href="/privacy-policy"> Política de Privacidade</a>
                <a href="/privacy-policy">Termos de Uso</a>
            </div>
        </footer>   
        </div>
    )


}