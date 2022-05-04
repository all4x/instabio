import Topbar from '../../components/Topbar'
import Footer from '../../components/Footer'
import Eu from '../../public/eu.png'
import Image from 'next/image'
import Head from 'next/head'


const teste = () => {
    return (
        <div>
            <Head>
            <title>Nylde Cosmeticos © </title>
            <link rel="icon" href="/public/artlouja.png" />
            <meta name="description" content="Teste do fio de cabelo na água: passo a passo"/>
            </Head>
            <Topbar/>
            <h1 className='text-center font-normal text-xl p-4'>Teste do fio de cabelo na água: passo a passo de como identificar o nível de porosidade dos seus fios</h1>
            <div className='flex justify-center'>              
                <img className='rounded-lg m-4' src="https://cabelo.com.br/wp-content/uploads/2019/01/porosidade.jpg"></img>
            </div>

            <p className='text-left ml-4 m-2 font-normal text-lg text-gray-800'>Porosidade capilar nada mais é do que a <span className='text-red-700'>capacidade do cabelo em absorver nutrientes.</span> Para quem ainda não entende do assunto, mas quer saber se os fios estão realmente saudáveis, saiba que a porosidade existe em 3 níveis: alta, média e baixa.</p>
            <p className='text-left ml-4 m-2 font-normal text-lg text-gray-800'>Porosidade média quer dizer que o cabelo está saudável, mas fios com porosidade alta e baixa precisam de tratamentos porque podem estar altamente ressecados, quebradiços, opacos ou sem elasticidade. Para saber o nível da porosidade, não tem muito segredo: basta um copo com água e poucos fios de cabelo. Confira os detalhes!</p>
            <h1 className='text-center font-bold text-xl p-4'>Siga o passo a passo e descubra o nível de porosidade do seu cabelo </h1>
            <p className='text-left mt-4 ml-4 m-2 font-normal text-lg text-gray-800'>O teste é feito com um copo de água filtrada e apenas alguns fios de cabelo limpo, que podem ser aqueles que saem naturalmente na escova ou no pente. Separe um copo transparente e água filtrada e comece o teste.</p>

            <div className='space-y-3 m-4'>
            <p className='text-left ml-4 font-sans text-lg'> <span className='font-bold'>Passo 1 :</span> Encha o copo com água e coloque os fios de cabelo dentro;</p>
            <p className='text-left ml-4 font-sans text-lg'> <span className='font-bold'>Passo 2 :</span> Aguarde cerca de 10 minutos;</p>
            <p className='text-left ml-4 font-sans text-lg'> <span className='font-bold'>Passo 3 :</span> Observe se os fios afundaram, se ficaram no meio do copo ou se boiaram.</p>
            <p className='text-left ml-4 font-sans text-lg'> <span className='font-bold'>Passo 4 :</span> Se os fios afundaram no copo com água, é sinal de alta porosidade. Se os fios ficaram no meio do copo, significa média porosidade. Se os fios boiaram, é sinal de baixa porosidade.</p>
            </div>
            <h1 className='text-center font-bold text-xl p-4'>Saiba o que significa cada nível de porosidade capilar: </h1>
            
            <div className='space-y-4 mb-10'>
            <p className='text-left ml-4 font-sans text-lg'> <span className='font-bold'>Porosidade baixa:</span> É quando os fios boiam no copo com água. Isso significa que as cutículas estão bem fechadas e, por isso, <span className='text-red-700'> fica mais difícil a absorção de água ou outros tratamentos. </span></p>

            <p className='text-left ml-4 font-sans text-lg'> <span className='font-bold'>Porosidade média: </span> É quando os fios ficam no meio do copo. Isso quer dizer que as cutículas estão meio abertas e os fios conseguem absorver água e tratamentos na medida certa, ou seja, o cabelo é considerado saudável.</p>

            <p className='text-left ml-4 font-sans text-lg '> <span className='font-bold'>Porosidade alta: </span>  É quando os fios afundam no copo com água porque as cutículas estão muito abertas. Ele absorve água mas perde rapidamente porque o cabelo está bastante ressecado, quebradiço, com frizz e pontas duplas.</p>

            </div>
            <div className='flex justify-center' >
            <Image  height={240} width={240} src={Eu}/>

            </div>
            <p className='text-center mb-4 font-normal text-lg'> <span className='font-bold'>Nylde</span> 04/05/2022</p>

            <Footer/>
        </div>
    );
}

export default teste;