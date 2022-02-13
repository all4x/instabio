import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Image from 'next/image'
import Logo from '../public/logo-detox.png'
import Potes from '../public/newdetox.png'
import Button from '@mui/material/Button';
import Um from '../public/1.png'
import Dois from '../public/2.png'
import Treis from '../public/3.png'
import Zap from '../src/components/whatsapp'
import Topbar from '../src/components/Topbar'



export default function Home() {
    return(
        <div className=''>
        <Head>
        <meta name="title" content="Nylde Cosmeticos | New Detox"/>
        <link rel="icon" href="/detox.png" />
        <meta name="description" content="New Detox possui fórmula 100% natural que contém ingredientes potentes capazes de agilizar o processo de emagrecimento, sem precisar sair de casa para academia"/>
        </Head>
        <Topbar/>
        <Zap/>
        <div className='flex justify-center m-5'>
            <Image src={Logo} width={317} height={45} />
        </div>

        <div className='flex justify-center'>
            <Image src={Potes} width={341} height={341} />
        </div>
        <div className='flex justify-center mb-5'>
            <Link href="https://nyldecosmeticos.lojaintegrada.com.br/new-detox">
                <Button variant="contained" disableElevation color="success" >
                Eu Quero
                </Button>
            </Link>
        </div>
        <div className='bg-green-700'>

        <div className=''>
            <h1 className='text-3xl font-light text-gray-50 text-center p-5'>VOCÊ MAIS MAGRA E DISPOSTA EM POUCAS SEMANAS</h1>
            <div className='flex justify-center '>
                <div>
                    <Image src={Um}/>
                </div>
            </div>
            <h1 className='text-center text-gray-50 p-4'>
                <strong className=''>SEM</strong> Precisar Parar de Comer o que Você Gosta
                </h1>
        </div>

        <div className=''>
            
            <div className='flex justify-center '>
                <div>
                    <Image src={Dois}/>
                </div>
            </div>
            <h1 className='text-center text-gray-50 p-4'>
                <strong className=''>SEM</strong>  Precisar se Matar com Exercícios Chatos e Cansativos...
                </h1>
        </div>

        <div className=''>
            
            <div className='flex justify-center '>
                <div>
                    <Image src={Treis}/>
                </div>
            </div>
            <h1 className='text-center text-gray-50 p-4'>
                <strong className=''>SEM</strong>  Resultados Satisfatórios já nas Primeiras Semanas de Uso
                </h1>
        </div>
        </div>

        
        <Footer/>
        </div>
    )
}
//           https://app.monetizze.com.br/r/AFN18833790?src=PaginaDeVendasLouja
//          <meta http-equiv="refresh" content="0;https://app.monetizze.com.br/r/AFN18833790?src=PaginaDeVendasLouja" />
