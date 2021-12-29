import Head from 'next/head'
import Newdetox from './newdetox.png'
import Image from 'next/image'

export default function Home() {
    return(
        <div>
        <Head>
          <meta name="title" content="Nylde Cosmeticos | New Detox"/>
          <link rel="icon" href="/newdetox.png" />
          <meta name="description" content="New Detox possui fórmula 100% natural que contém ingredientes potentes capazes de agilizar o processo de emagrecimento, sem precisar sair de casa para academia"/>
          <meta http-equiv="refresh" content="0;https://app.monetizze.com.br/r/AFN18833790" />
        </Head> 
        <div className='m-3 flex flex-col items-center justify-center min-h-screen text-3xl font-light animate-pulse text-center'>
        <h1>Direcionando para a página solicitada.</h1>
        </div>
        <div className=''> 
          <Image src={Newdetox} width={1} height={1}/>
          </div>
        </div>
    )
}