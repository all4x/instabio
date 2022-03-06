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

import Prova from '../public/1.jpg'
import Prova2 from '../public/2.jpg'
import Prova3 from '../public/3.jpg'
import Prova4 from '../public/4.jpg'
import Prova5 from '../public/print1.png'
import Prova6 from '../public/print2.png'





export default function Home() {
    return(
        <div className=''>
        <Head>
        <meta name="title" content="Nylde Cosmeticos | New Detox"/>
        <link rel="icon" href="/detox.png" />
        <meta name="description" content="New Detox possui fórmula 100% natural que contém ingredientes potentes capazes de agilizar o processo de emagrecimento, sem precisar sair de casa para academia"/>
        </Head>
        <Zap/>

        {/* TOPBAR HEADLINE*/}
        <div className='flex justify-center m-5 pt-5'>
            <Image src={Logo} width={317} height={45} />
        </div>
        <div className='xl:hidden'>
          <h1 className='text-center font-light text-2xl text-green-800 mt-2 px-2'>Emagreça muito mais rapido</h1>
          <h2 className='text-center font-extrabold text-3xl text-green-800 my-5'>CONQUISTE SUA AUTO ESTIMA DE VOLTA EM POUCAS SEMANAS</h2>
        <div className='m-4 bg-gradient-to-l from-green-800 to-yellow-600 px-2 rounded-lg'>
        <p className='text-center bg-gray-50 shadow-2xl m-3 p-2 font-sans text-2xl text-gray-800'> New Detox é um poderoso suplemento que acelera o seu metabolismo, diminui o inchaço e a retenção dos líquidos do seu corpo, elimina as substâncias inflamatórias e te faz emagrecer de forma rápida, saudável e definitiva.</p>

        </div>
        </div>

      

        <div className='flex justify-center'>
            <Image src={Potes} width={341} height={341} />
        </div>
        <div className='flex justify-center mb-5'>
            <a href="https://app.monetizze.com.br/r/AFN18833790?src=Facebookads">
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
         {/* Provas sociais [ Varias provas ] */}

       <div className='text-center font-sans text-3xl m-4'>
        <p> Veja os resultados de algumas das minhas clientes😍 </p> 

      </div>
      <div className='xl:hidden m-5 2xl:hidden lg:hidden p-2'>
        <Image src={Prova}/>
        <Image src={Prova2}/>
        <Image src={Prova3}/>
        <Image src={Prova4}/>
        <Image src={Prova5}/>
        <Image src={Prova6}/>


      </div>
         {/* CHECKOUT INTEIRO */}
      <div className="bg-gray-50 p-5">
      <h1 className='text-center text-4xl font-bold '>Escolha a Melhor Oferta Para Você</h1>
      <h2 className='text-center font-sans text-2xl'>Elimine de 4 a 6 kilos com 1 mês de tratamento</h2>
      
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
            <a href='https://app.monetizze.com.br/r/BGM1438897?src=Facebookads-1'>
            <Button variant="contained" color="success">
            Comprar
            </Button>
            </a>
            </div>
            <div className="text-center mt-5 font-medium">30 Dias De Garantia!</div>
          </div>
          
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
            <a href='https://app.monetizze.com.br/r/BTU1443218?src=Facebook-ads-2'>
            <Button variant="contained" color="success">
            Comprar
            </Button>
            </a>
            </div>
            <div className="text-center mt-5 font-medium">30 Dias De Garantia!</div>

          </div>  
                  
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
            <a href='https://app.monetizze.com.br/r/BLD1443220?src=Facebookads-3'>
            <Button variant="contained" color="success">
            Comprar
            </Button>
            </a>
            </div>
            <div className="text-center mt-5 font-medium">30 Dias De Garantia!</div>

          </div>
          
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
            <a href='https://app.monetizze.com.br/r/BLA1443221?src=Facebookads-5'>
            <Button variant="contained" color="success">
            Comprar
            </Button>
            </a>
            </div>
            <div className="text-center mt-5 font-medium">30 Dias De Garantia!</div>

          </div>
          
        </div>
       
      </div>
      
      <div className='flex justify-center mb-5'>
            <a href="https://app.monetizze.com.br/r/AFN18833790?src=Formulação">
                <Button variant="contained" disableElevation color="success" className='animate-pulse' >
                CONHEÇA A FORMULAÇÃO DO NEW DETOX
                </Button>
            </a>
        </div>
        
        <div className='xl:hidden'>
          <h1 className='text-center font-semibold text-3xl'>Ainda com dúvidas?</h1>
          <div className='space-y-2'>
            <div>
              <h1 className='text-center font-light text-lg m-5 p-2 bg-gray-200 shadow-2xl rounded-lg'> Quais os efeitos do New Detox?</h1>
              <p className='text-left m-2 p-3 text-base font-normal text-gray-600 '>New Detox possui uma ação emagrecedora, atuando na queima de gordura, desintoxicação do corpo, auxiliando na redução do inchaço do seu corpo, aumentando sua disposição e fazendo você emagrecer de forma rápida e definitiva.</p>
            </div>
            
            <div>
            <h1 className='text-center font-light text-lg m-5 p-2 bg-gray-200 shadow-2xl rounded-lg'>Quantos quilos consigo emagrecer com New Detox?</h1>
            <p className='text-left m-2 p-3 text-base font-normal text-gray-600 '>Os resultados variam de pessoa para pessoa, mas com New Detox você já consegue obter e ver diferença já nas primeiras semanas de uso.</p>
            </div>

            <div>
            <h1 className='text-center font-light text-lg m-5 p-2 bg-gray-200 shadow-2xl rounded-lg'>Qual o prazo da entrega?</h1>
            <p className='text-left m-2 p-3 text-base font-normal text-gray-600 '>O prazo médio de entrega para o Brasil é de 1 a 10 dias úteis. O produto só é enviado após a confirmação do seu pagamento pela administradora do seu cartão de crédito ou após a confirmação do pagamento do boleto.</p>
            </div>

            <div>
            <h1 className='text-center font-light text-lg m-5 p-2 bg-gray-200 shadow-2xl rounded-lg'>Existem efeitos colaterais? Qualquer um pode tomar?</h1>
            <p className='text-left m-2 p-3 text-base font-normal text-gray-600 '>Não existe nenhum efeito colateral com o consumo do produto, e qualquer pessoa pode tomar e aproveitar seus benefícios.Porém, gestantes, crianças e pessoas enfermas ou que fazem uso contínuo de algum medicamento devem consultar um médico antes de iniciar o consumo.</p>
            </div>

            <div>
            <h1 className='text-center font-light text-lg m-5 p-2 bg-gray-200 shadow-2xl rounded-lg'>Como devo usar New Detox?</h1>
            <p className='text-left m-2 p-3 text-base font-normal text-gray-600 '>New Detox deve ser tomado diariamente, 2 cápsulas por dia, preferencialmente antes das refeições.</p>
            </div>

          </div>
        </div>


        <Footer/>
        </div>
    )
}
//           https://app.monetizze.com.br/r/AFN18833790?src=PaginaDeVendasLouja
//          <meta http-equiv="refresh" content="0;https://app.monetizze.com.br/r/AFN18833790?src=PaginaDeVendasLouja" />
