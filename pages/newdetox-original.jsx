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
import Checkout from '../src/components/checkout'

import Frete from '/public/Frete-gratis.png'
import Kit1 from '/public/kit1.png'
import Kit2 from '/public/mockup-2.png'
import Kit3 from '/public/mockup-3.png'
import Kit5 from '/public/mockup-5.png'





export default function Home() {
    return(
        <div className=''>
        <Head>
        <meta name="title" content="Nylde Cosmeticos | New Detox"/>
        <link rel="icon" href="/detox.png" />
        <meta name="description" content="New Detox possui fórmula 100% natural que contém ingredientes potentes capazes de agilizar o processo de emagrecimento, sem precisar sair de casa para academia"/>
        </Head>
        <Zap/>
        <div className='flex justify-center m-5'>
            <Image src={Logo} width={317} height={45} />
        </div>

        <div className='flex justify-center'>
            <Image src={Potes} width={341} height={341} />
        </div>
        <div className='flex justify-center mb-5'>
            <a href="https://app.monetizze.com.br/r/AFN18833790">
                <Button variant="contained" disableElevation color="success" className='animate-pulse' >
                Conheça o New detox
                </Button>
            </a>
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
                <strong className=''></strong>  Resultados Satisfatórios já nas Primeiras Semanas de Uso
                </h1>
        </div>
        </div>
         {/* CHECKOUT INTEIRO */}
      <div className="bg-gray-50 p-5">
      <h1 className='text-center text-4xl font-bold '>Escolha a Melhor Oferta Para Você</h1>
      <h2 className='text-center font-sans text-3xl'> Catálogo sem cupom de desconto </h2>
      </div>

              {/* CHECKOUT 1 pote */}
      <div>
        <div className="mt-10 mb-5 ml-8 mr-8 flex justify-center bg-gray-100 rounded-xl ">
          <div className="m-4 p-2 rounded-xl">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Compre 1 Pote</h1>
              <h2 className="text-xl font bg-gray-500 text-white px-4 rounded-md">
                Tratamento para 1 Mês
              </h2>
            </div>
            <hr className="bg-yellow-700 m-3 p-[0.2%]" />

            <div className='flex justify-items-start'>
              <div> <Image src={Kit1}/></div>
              <div className='text-center flex-col justify-center'>
                <h1 className='m-2 font-semibold text-gray-600 '> <strong className='line-through'>De R$137</strong></h1>
                <h2 className='text-gray-600'>Por 12x <strong className=' text-black text-3xl font-black'>9,74</strong></h2>
                <p className='text-gray-600 font-extrabold'>ou R$97,00 à vista</p>
              </div>
            </div>
            <hr className="bg-yellow-700 m-3 p-[0.2%]" />
            <div className='flex justify-center '>
            <a href='https://app.monetizze.com.br/r/BGM1438897'>
            <Button variant="contained" color="success">
            Comprar
            </Button>
            </a>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mb-5">
        <Link href="/whatsapp">
          <Button
            variant="contained"
            disableElevation
            color="success"
            className="animate-pulse"
          >
            Comprar Pelo Whatsapp
          </Button>
        </Link>
      </div>
      </div>

          {/* CHECKOUT 2 potes */}
      <div>
        <div className="mt-10 mb-5 ml-8 mr-8 flex justify-center bg-gray-100 rounded-xl ">
          <div className="m-4 p-2 rounded-xl">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Compre 2 Pote</h1>
              <h2 className="text-xl font bg-gray-500 text-white px-4 rounded-md">
                Tratamento para 2 Mês
              </h2>
            </div>
            <hr className="bg-yellow-700 m-3 p-[0.2%]" />

            <div className='flex justify-items-start'>
              <div> <Image src={Kit2}/></div>
              <div className='text-center flex-col justify-center'>
                <h1 className='m-2 font-semibold text-gray-600 '> <strong className='line-through'>De R$194</strong></h1>
                <h2 className='text-gray-600'>Por 12x <strong className=' text-black text-3xl font-black'>15,76</strong></h2>
                <p className='text-gray-600 font-extrabold'>ou R$157,00 à vista</p>
              </div>
            </div>
            <hr className="bg-yellow-700 m-3 p-[0.2%]" />
            <div className='flex justify-center '>
            <a href='https://app.monetizze.com.br/r/BTU1443218'>
            <Button variant="contained" color="success">
            Comprar
            </Button>
            </a>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mb-5">
        <Link href="/whatsapp">
          <Button
            variant="contained"
            disableElevation
            color="success"
            className="animate-pulse"
          >
            Comprar Pelo Whatsapp
          </Button>
        </Link>
      </div>
      </div>

        {/* CHECKOUT 3 potes */}
      <div>
        <div className="mt-10 mb-5 ml-8 mr-8 flex justify-center bg-gray-100 rounded-xl ">
          <div className="m-4 p-2 rounded-xl">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Compre 3 Pote</h1>
              <h2 className="text-xl font bg-gray-500 text-white px-4 rounded-md">
                Tratamento para 3 Mês
              </h2>
            </div>
            <hr className="bg-yellow-700 m-3 p-[0.2%]" />

            <div className='flex justify-items-start'>
              <div> <Image src={Kit3}/></div>
              <div className='text-center flex-col justify-center'>
                <h1 className='m-2 font-semibold text-gray-600 '> <strong className='line-through'>De R$297,00</strong></h1>
                <h2 className='text-gray-600'>Por 12x <strong className=' text-black text-3xl font-black'>22,79</strong></h2>
                <p className='text-gray-600 font-extrabold'>ou R$227,00 à vista</p>
              </div>
            </div>
            <hr className="bg-yellow-700 m-3 p-[0.2%]" />
            <div className='flex justify-center '>
            <a href='https://app.monetizze.com.br/r/BLD1443220'>
            <Button variant="contained" color="success">
            Comprar
            </Button>
            </a>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mb-5">
        <Link href="/whatsapp">
          <Button
            variant="contained"
            disableElevation
            color="success"
            className="animate-pulse"
          >
            Comprar Pelo Whatsapp
          </Button>
        </Link>
      </div>
      </div>

      {/* CHECKOUT 5 potes */}
      <div>
        <div className="mt-10 mb-5 ml-8 mr-8 flex justify-center bg-gray-100 rounded-xl ">
          <div className="m-4 p-2 rounded-xl">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Compre 5 Pote</h1>
              <h2 className="text-xl font bg-gray-500 text-white px-4 rounded-md">
                Tratamento para 5 Mês
              </h2>
            </div>
            <hr className="bg-yellow-700 m-3 p-[0.2%]" />

            <div className='flex justify-items-start'>
              <div> <Image src={Kit5}/></div>
              <div className='text-center flex-col justify-center'>
                <h1 className='m-2 font-semibold text-gray-600 '> <strong className='line-through'>De R$497,00</strong></h1>
                <h2 className='text-gray-600'>Por 12x <strong className=' text-black text-3xl font-black'>34,84</strong></h2>
                <p className='text-gray-600 font-extrabold'>ou R$347,00 à vista</p>
              </div>
            </div>
            <hr className="bg-yellow-700 m-3 p-[0.2%]" />
            <div className='flex justify-center '>
            <a href='https://app.monetizze.com.br/r/BLA1443221'>
            <Button variant="contained" color="success">
            Comprar
            </Button>
            </a>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mb-5">
        <Link href="/whatsapp">
          <Button
            variant="contained"
            disableElevation
            color="success"
            className="animate-pulse"
          >
            Comprar Pelo Whatsapp
          </Button>
        </Link>
      </div>
      </div>
       {/* Provas sociais [ Varias provas ] */}

       <div className='text-center font-sans text-3xl m-4'>
        <p> Veja os resultados de algumas das minhas clientes😍 </p> 

      </div>
      <div className='xl:hidden m-5'>
        <Image src={Prova}/>
        <Image src={Prova2}/>
        <Image src={Prova3}/>
        <Image src={Prova4}/>

      </div>

        
        <Footer/>
        </div>
    )
}
//           https://app.monetizze.com.br/r/AFN18833790?src=PaginaDeVendasLouja
//          <meta http-equiv="refresh" content="0;https://app.monetizze.com.br/r/AFN18833790?src=PaginaDeVendasLouja" />
