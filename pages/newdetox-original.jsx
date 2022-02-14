import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Image from 'next/image'
import Logo from '../public/logo-detox.png'
import Potes from '../public/newdetox.png'
import Button from '@mui/material/Button'
import Um from '../public/1.png'
import Dois from '../public/2.png'
import Treis from '../public/3.png'
import Zap from '../src/components/whatsapp'
import Topbar from '../src/components/Topbar'
import Frete from '../public/Frete-gratis.png'
import Kit1 from '../public/kit1.png'




export default function Home() {
  return (
    <div className="">
      <Head>
        <meta name="title" content="Nylde Cosmeticos | New Detox" />
        <link rel="icon" href="/detox.png" />
        <meta
          name="description"
          content="New Detox possui fórmula 100% natural que contém ingredientes potentes capazes de agilizar o processo de emagrecimento, sem precisar sair de casa para academia"
        />
      </Head>
      <Topbar />
      <Zap />
      <div className="flex justify-center m-5">
        <Image src={Logo} width={317} height={45} />
      </div>

      <div className="flex justify-center">
        <Image src={Potes} width={341} height={341} />
      </div>
      <div className="flex justify-center mb-5">
        <Link href="/conversion">
          <Button
            variant="contained"
            disableElevation
            color="success"
            className="animate-pulse"
          >
            Leia mais sobre o New detox
          </Button>
        </Link>
      </div>
     

      <div className="bg-green-700">
        <div className="">
          <h1 className="text-3xl font-light text-gray-50 text-center p-5">
            VOCÊ MAIS MAGRA E DISPOSTA EM POUCAS SEMANAS
          </h1>
          <div className="flex justify-center ">
            <div>
              <Image src={Um} />
            </div>
          </div>
          <h1 className="text-center text-gray-50 p-4">
            <strong className="">SEM</strong> Precisar Parar de Comer o que Você
            Gosta
          </h1>
        </div>

        <div className="">
          <div className="flex justify-center ">
            <div>
              <Image src={Dois} />
            </div>
          </div>
          <h1 className="text-center text-gray-50 p-4">
            <strong className="">SEM</strong> Precisar se Matar com Exercícios
            Chatos e Cansativos...
          </h1>
        </div>

        <div className="">
          <div className="flex justify-center ">
            <div>
              <Image src={Treis} />
            </div>
          </div>
          <h1 className="text-center text-gray-50 p-4">
            <strong className="">SEM</strong> Resultados Satisfatórios já nas
            Primeiras Semanas de Uso
          </h1>
        </div>
      </div>

      {/* CHECKOUT */}
      <div>
        <div className="mt-10 mb-5 ml-8 mr-8 flex justify-center bg-gray-50 ">
          <div className="bg-gray-200 m-4 p-2 rounded-xl">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Compre 1 Pote</h1>
              <h2 className="text-xl font bg-gray-500 text-white px-4 rounded-md">
                Tratamento para 1 Mês
              </h2>
            </div>
            <hr className="bg-yellow-700 m-3 p-[0.2%]" />

            <div className='flex justify-items-start'>
              <div> <Image src={Kit1} width={204} heigh={160}/></div>
              <div className='text-center flex-col justify-center'>
                <h1 className='m-2 font-semibold text-gray-600 '>De <strong className='line-through'>R$177</strong></h1>
                <h2 className='text-gray-600'>Por 12x <strong className=' text-black text-3xl font-black'>10,27</strong></h2>
                <p className='text-gray-600 font-extrabold'>ou R$105,00 à vista</p>
              </div>
            </div>
            <hr className="bg-yellow-700 m-3 p-[0.2%]" />
            <div className='flex justify-center '>
            <a href='https://nyldecosmeticos.lojaintegrada.com.br/new-detox'>
            <Button variant="contained" color="success">
            Comprar
            </Button>
            </a>
            </div>
            <div className='flex m-4 justify-center'>
                <Image src={Frete} />
            </div>
            <p className="text-center font-light p-3">
        utilize o cupom : <strong>Detox20</strong> para ter 20% de desconto!
      </p>
          </div>
          
        </div>
        <div className="flex justify-center mb-5">
        <Link href="/conversion">
          <Button
            variant="contained"
            disableElevation
            color="success"
            className="animate-pulse"
          >
            Leia mais sobre o New detox
          </Button>
        </Link>
      </div>
      </div>

      <Footer />
    </div>
  )
}
//           https://app.monetizze.com.br/r/AFN18833790?src=PaginaDeVendasLouja
//          <meta http-equiv="refresh" content="0;https://app.monetizze.com.br/r/AFN18833790?src=PaginaDeVendasLouja" />
