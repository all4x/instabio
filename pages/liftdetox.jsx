import Image from 'next/image'
import Pixel from '../src/components/Pixel'



import Detox from '../public/detox.png'
import Botao from './botao'
import Check from '/public/check.svg'
import Peso1 from '/public/bn1.png'
import Peso2 from '/public/bn2.png'
import Peso3 from '/public/bn3.png'
import Peso4 from '/public/bn4.png'
import F1 from '/public/f1.png'
import F2 from '/public/f2.png'
import F3 from '/public/f3.png'
import F4 from '/public/f4.png'
import F5 from '/public/f5.png'
import F6 from '/public/f6.png'
import Art1 from '/public/art1.png'
import Art2 from '/public/art2.png'
import Art3 from '/public/art3.png'
import Art4 from '/public/art4.png'
import Logopng from '/public/logo.png'
import pt1 from '/public/pt1.jpeg'
import pt2 from '/public/pt2.jpeg'
import pt3 from '/public/pt3.jpeg'
import pt4 from '/public/pt4.jpeg'
import Modelo from '/public/modelo.png'



import Seguro from '/public/selos-de-compra.png'

import Anvisa from '/public/anvisa.png'
import Natural from '/public/natural.png'
import Simulacao from '/public/simulacao.jpg'

import Frete from '/public/freteg.png'
import Parcela from '/public/parcela.png'
import Sigilo from '/public/sigilo.png'
import Comprag from '/public/compra.png'







import Depois from '/public/dp-1.png'
import Depois2 from '/public/dp-2.png'
import Depois3 from '/public/dp-3.png'



import Negativa from '../src/components/Negativa'
import Head from 'next/head'


const Main = () => {
    return (
    <div className="h-screen">
          <Pixel name='FACEBOOK_PIXEL_1' />
          <Head>
          <link rel="icon" href="/detox.png" />
          <meta name="description" content="Lift Detox Caps possui fórmula 100% natural que contém ingredientes potentes capazes de agilizar o processo de emagrecimento, sem precisar sair de casa para academia"/>
          </Head>
         <iframe src="https://app.monetizze.com.br/r/AFY17713867" width="1" height="1"></iframe>
       
        <div className=" xl:m-6 m-3 p-4 border-b-4 rounded-2xl shadow-xl 
         bg-gradient-to-t from-green-400 to-green-100 
         flex-row justify-center items-center
        border-white ">
        <h1 className="text-center font-extrabold text-5xl py-3">Inovação e Potência para</h1>
        <h2 className=" text-center text-2xl text-white">Facilitar seu Processo de Emagrecimento</h2>
        </div>
        <div className="flex-col xl:flex-row justify-center m-4 h-80 ">
        <p className="text-center font-normal text-lg xl:text-2xl  text-gray-600">  <strong>Lift Detox Caps</strong> possui fórmula 100% natural que contém ingredientes potentes capazes de agilizar o processo de emagrecimento, sem precisar sair de casa para academia</p>
        <div className="flex justify-center">
        <Image src={Detox} width={250} height={250} ></Image>
        </div>  
        </div>
        <div className="hidden">
            <Negativa></Negativa>
        </div>
        <div className="m-5">    
        <Botao></Botao>
            </div>  
       
       
        <div>
        <h2 className="text-4xl text-center font-black p-2 my-5">
		<span className="text-green-700">Efeito Bariátrica NATURAL</span> em Cápsulas
	    </h2>
        <hr/>
        <div className="text-left font-sans text-xl text-gray-900 px-5 space-y-2">
        <p>Ao total foram 8 anos de pesquisa e estudos para encontrar a tecnologia e a medida certa para desenvolver Lift Detox Caps.</p>
        <hr/>
        <div className=" text-xl text-center my-5 p-5 font-semibold bg-gradient-to-r from-green-400 to-green-700 rounded-xl">
				<h2>
					QUEM  <span className="text-white">EXPERIMENTOU</span> Lift Detox Caps RECOMENDA
				</h2>
				<div className="py-3 text-lg text-gray-100 text-center m-3">
				<p>
					 Lift Detox Caps é a solução perfeita para quem busca emagrecer de forma rápida e saudável Veja os resultados de quem já usou Lift Detox Caps 
				</p>
                </div>
			</div>
      
        </div>
        <div className="bg-green-400 p-3 my-6">
        <h3 className="text-2xl m-4 text-center font-bold py-3"> RESULTADOS JÁ NAS PRIMEIRAS SEMANAS </h3>
        <Image src={Depois}></Image>
        <h1 className="text-3xl font-normal text-center text-white">-16Kg</h1>
        <div className=" shadow-lg m-5 p-4 rounded-xl">
        <p className="text-center font-medium text-white m-1">“Hoje eu completo 7 meses que comecei a tomar, perdi 16kg e estou muito satisfeita com meu corpo!”</p>
        </div>
        </div>

        <div className="bg-green-400 p-3 my-6">
        <h3 className="text-2xl m-4 text-center font-bold py-3"> RESULTADOS JÁ NAS PRIMEIRAS SEMANAS </h3>
        <Image src={Depois2}></Image>
        <h1 className="text-3xl font-normal text-center text-white">-12Kg</h1>
        <div className="shadow-lg m-5 p-4 rounded-xl">
        <p className="text-center font-medium text-white m-1">“Depois de tentar de tudo, finalmente encontrei a maneira correta de emagrecer, super feliz com os resultados.”</p>
        </div>
        </div>

        <div className="bg-green-400 p-3 my-6">
        <h3 className="text-2xl m-4 text-center font-bold py-3"> RESULTADOS JÁ NAS PRIMEIRAS SEMANAS </h3>
        <Image src={Depois3}></Image>
        <h1 className="text-3xl font-normal text-center text-white">-9Kg</h1>
        <div className="shadow-lg m-5 p-4 rounded-xl">
        <p className="text-center font-medium text-white m-1 ">“Nossa, estou maravilhar com o Lift Detox Caps nunca pensei que poderia perder peso tão facilmente”</p>
        </div>
        </div>
        
        </div>
        <div className="bg-gradient-to-tr from-green-300 to-green-700 m-6 rounded-xl py-2 px4">
        <p className="text-xl text-center font-extrabold">Se você deseja;</p>
        <ul className="m-6 flex-col justify-center text-lg">
					<li>
						<p className=" space-x-1">
                            <Image src={Check} width={20} height={20} ></Image>
							<b>Emagrecer da maneira rápida e natural </b>
						</p>
					</li>
					<li>
						<p className=" space-x-1">
                            <Image src={Check} width={20} height={20} ></Image>
							<b>Com ativos 100% naturais e livre de efeitos colaterais </b>
						</p>
					</li>
					<li>
						<p className="space-x-1">
                            <Image src={Check} width={20} height={20} ></Image>
							<b>Finalmente usar as roupas que sempre quis </b>
						</p>
					</li>
                    <li>
						<p className="space-x-1">
                            <Image src={Check} width={20} height={20} ></Image>
							<b>Reconquistar sua autoestima e qualidade </b>
						</p>
					</li>
				</ul>
        </div>
        <h3 className="text-2xl text-center font-sans p-4">Experimente agora e desfrute de todos os benefícios</h3>
        <div className="flex flex-col justify-center xl:hidden">
    
        </div>
        

      <Botao></Botao>





        
        <div className=" bg-green-500 rounded-xl">
        <h2 className="text-4xl text-center m-4 p-2 font-semibold"> Descubra o que nossas cápsulas <span className="text-white">podem fazer por você</span></h2>
        <p className="m-3 text-xl text-center text-white">
	    <strong className="text-gray-800 text-xl">Lift Detox Caps </strong>Com sua fórmula avançada, Lift Detox Caps queima gordura de forma acelerada, proporcionando um emagrecimento rápido e definitivo em poucas semanas.</p>
        <div className="flex-col justify-center  bg-green-500 text-xl">
        <div className="flex justify-center"> <Image src={Peso1} height="240" width="240"></Image></div>
        <h3 className="text-center text-xl text-gray-900">Acelera o metabolismo</h3>
        <p  className="text-center text-xl my-4 p-2 text-white">O metabolismo acelerado faz com que a pessoa queime as calorias mais rapidamente, concentrando menos gorduras, de forma que fica mais difícil ganhar peso. </p>
        <div className="flex justify-center bg-green-500"> <Image src={Peso2} height="240" width="240"></Image></div>
        <div className="bg-green-500 ">
        <h3 className="text-center text-xl text-gray-900">Diminui o Apetite</h3>
        <p className="text-center text-xl my-4 p-3 text-white">Os ativos presentes em seus compostos diminuem o apetite e reduzem a absorção de açúcares e gorduras no organismo. </p>
        
        <div className="flex justify-center bg-green-500"> <Image src={Peso3} height="240" width="240"></Image></div>
        <div className="bg-green-500 ">
        <h3 className="text-center text-xl text-gray-900"> Regula o Intestino</h3>
        <p className="text-center text-xl p-3 text-white">Por ser composto por diversas fibras inteligentes, seu intestino começará a trabalhar de forma correta. Ajuda quem sofre com intestino preguiçoso. </p>
        </div>
        
        <div className="flex justify-center bg-green-500"> <Image src={Peso4} height="240" width="240"></Image></div>
        <div className="bg-green-500 ">
        <h3 className="text-center text-xl text-gray-900">  Efeito barriga chapada  </h3>
        <p className="text-center text-xl my-2 p-3 text-white"> Por acelerar o metabolismo e queimar a gordura localizada, reduz drasticamente a gordura abdominal.</p>
        </div>
        </div>
        </div>
        </div>


        <div className="xl:flex justify-center m-4">
            <div>
                <Image src={pt1}></Image>
            </div>
            <div>
                <Image src={pt2}></Image>
            </div>
            <div>
                <Image src={pt3}></Image>
            </div>
            <div>
                <Image src={pt4}></Image>
            </div>
        </div>
       


       
       
     <Botao></Botao>

       


        <div className="bg-green-500 flex-row justify-center">
        <h2 className="text-center text-4xl font-black text-white p-4">FIM da GUERRA contra BALANÇA </h2>
        <p className="text-left font-normal text-white px-4">Você sabia que para ter resultados surpreendentes e muito mais rápidos é necessário fazer o uso de 2 cápsulas por dia?</p>
        <p className="text-left font-normal text-white px-4 py-2">Sim, é verdade para conseguir resultados incríveis com Lift Detox Caps basta tomar as cápsulas 40 min antes das principais refeições.</p>
        <p className="text-left font-black text-white px-4 py-2 ">Com uma fórmula altamente concentrada e ativos rigorosamente selecionados Lift Detox Caps auxilia na jornada do corpo ideal.</p>
        <div className="flex justify-center">
            <Image src={Modelo} width={300} height={380}></Image>
        </div>
        </div>

        <div className="xl:flex flex justify-center">

            <div className="m-5 ">
                <div className="flex justify-center p-4">
                <Image src={Anvisa}></Image>
                </div>
            <div className="">
            <p className="text-sm font-bold text-center">Lift Detox Caps é liberado e aprovado pela Anvisa </p>
            <p className="text-sm text-center">nos termos da RDC 240 de 26/07/2018, sendo dispensado de registro, pois é avaliado como 100% Seguro para o consumo da população.</p>
            </div>
            
            </div>


            <div className="m-5 ">
                <div className="flex justify-center p-4">
                <Image src={Natural}></Image>
                </div>
            <div className="">
            <p className="text-sm font-bold text-center">Todos os Componentes da Fórmula </p>
            <p className="text-sm text-center"> Lift Detox Caps são 100% Naturais, sendo liberado para o uso sem preocupações como irritação e alergias, Garantindo mais segurança. </p>
            </div>
            


            </div>


        </div>

        <div className="flex justify-center">
                <Image src={Simulacao} ></Image>
            </div>

        



        <div className="py-5">
            <h1 className="font-black text-center text-3xl">VEJA COMO O</h1>
            <h2 className= "font-black text-center text-3xl text-green-400">Lift Detox Caps FUNCIONA</h2>
            <p className="text-left text-lg p-5 text-gray-600">
          A fórmula de Lift Detox Caps possui um composto  natural capaz de induzir a queima acelerada de gordura do corpo, levando a perda de até 2kg de pura gordura profunda do corpo, principalmente da barriga, braços e pernas.
        </p>
        <p  className="text-left text-lg px-5 text-gray-600">
          A descoberta americana em torno do Lift Detox Caps, levou a comprovação de que as moléculas do composto, imitiam os mesmos "sinais" que são emitidos quando ingerimos uma refeição. Dessa forma, seu organismo acha que você está comendo e ativa o receptor, que inicia a quebra dos triglicérides de gordura, no entanto você não está ingerindo gordura, apenas a pílula.
        </p>
        <p  className="text-left text-lg px-5 text-gray-600">
          Por esse motivo, cientistas batizaram a fórmula como a "Pílula da refeição imaginária". A fórmula natural de Lift Detox Caps ativa os receptores  sem criar nenhum efeito colateral no corpo, e eliminado camadas profundas de gordura abdominal e visceral.
        </p>
        <p  className="text-left text-lg px-5 text-gray-600">
          Conquistar o corpo dos seus sonhos, sem "gorduras chatas" agora é possível, com a aprovação de Lift Detox Caps pela Anvisa. Sacia a fome, enquanto elimina até 2kg de gordura por semana.
        </p>
        </div>

        <div className="bg-gray-200 p-5">
        <div className="col-12 text-center">
				<h2 className="text-4xl font-black">
					É a sua primeira <span className="text-green-500">compra na Internet?</span>
				</h2>
				<h3 className="font-extralight">
					Não se preocupe, site 100% seguro, empresa confiável e entrega garantida!
				</h3>
			</div>
            
        </div>


        <div>
        
        <div className="p-2 m-4 flex justify-center space-x-3" >
            <div className="flex-row justify-center">
            <div className="flex justify-center">
            <Image src={Sigilo}></Image>
            </div>
            <p className="font-sans text-center py-2 text-gray-500">Seus potes serão enviados com total sigilo e segurança, desde a embalagem do produto até a entrega.</p>
            </div>

            <div className="flex-row justify-center">
            <div className="flex justify-center">
            <Image src={Comprag}></Image>
            </div>
            <p className="font-sans text-center text-gray-500 py-2">Trabalhamos com a Monetizze, plataforma que utiliza os mais avançados recursos de segurança.</p>
            </div>
           
           
        </div>
        
        <div className="p-2 m-4 flex justify-center space-x-3">
        <div className="flex-row justify-center">
            <div className="flex justify-center">
            <Image src={Parcela}></Image>
            </div>
            <p className="font-sans text-center text-gray-500 py-2">Facilitamos para sua compra, você poderá parcelar até 12x no cartão de credito de sua preferência.</p>
            </div>
           
            <div className="flex-row justify-center">
            <div className="flex justify-center">
            <Image src={Frete}></Image>
            </div>
            <p className="font-sans text-center text-gray-500 py-2">Aproveite nossa oferta e compre com frete grátís e conte com toda discrição pois seus dados pessoais estão seguros.
</p>
            </div>
            </div>
            <div>
        <a href="#compra">
        <div className="m-4 rounded-full bg-green-400 flex 
        items-center justify-center h-16 
        text-center font-bold
        text-2xl animate-pulse">
        <div className="">
        <div className=""> <h1>PEÇA JÁ  Lift Detox Caps!</h1></div>
        <div>
       
        </div>
        </div>
       </div>
       </a>
       <div className="flex justify-center py-5">
       <Image src={Seguro} height={40} width={280}></Image>
       </div>
       </div>

       <div>
        <h1 className="font-black text-3xl text-center">EMAGRECIMENTO COMPROVADO!</h1>
        <h2 className="text-center font-extrabold text-green-500 p-3">SE NÃO HOUVER RESULTADOS EM 30 DIAS VOCÊ PODE DEVOLVER!</h2>
        <p className="text-center font-sans text-gray-700 p-5 text-lg">É sério! Você fica satisfeito, ou compramos o Lift Detox Caps de volta de você! Se por qualquer motivo achar que o Lift Detox Caps não ajudou , nós nos comprometemos em devolver a quantia paga pelo seu kit de potes de Lift Detox Caps FÓRMULA AVANÇADA. Temos certeza que Lift Detox Caps vai cumprir com o prometido, por isso nosso compromisso é uma garantia incondicionais de 30 DIAS. Saiba mais em Termos e condições</p>
        <h2 className="text-center font-black text-xl p-4 text-gray-700 ">Você terá até 30 dias após a compra para solicitar a devolução.</h2>
       
       </div>
        <div className="flex justify-center">
        <Image src={Detox} width={150} height={150} ></Image>
        </div>



        </div>













       <div className="text-center text-2xl font-medium bg-green-500 m-4 rounded-xl">
           <div className="py-5">
           <h1 >CONHEÇA O SEGREDO DA <strong className="text-gray-100 p-3">FÓRMULA DE Lift Detox Caps</strong></h1>
           </div>
      



       <div className="m-4">
       <Image src={F1}></Image>
       <h1>Spirulina</h1>
       <p className="text-lg text-gray-100 py-3">Fonte de energia, vitamina e minerais a spirulina auxilia no fortalecimento do sistema imunológico, controla a pressão e o colesterol e melhora a performance muscular. </p>
       </div>


       <div className="m-4">
       <Image src={F2}></Image>
       <h1>Vitamina E</h1>
       <p className="text-lg text-gray-100 py-3"> Efeito antioxidante poderoso a vitamina E é um dos segredos para cuidar do colesterol e gordura do fígado já que a mesma é responsável por eliminar as gorduras.  </p>
       </div>
      

       <div className="m-4">
       <Image src={F3}></Image>
       <h1>Guaraná</h1>
       <p className="text-lg text-gray-100 py-3"> Rico em energia e extraído diretamente da Amazônia ele auxilia o organismo a expulsar a gordura e age como um combustível para o corpo, fornecendo muito mais energia e disposição para o dia-a-dia.</p>
       </div>


       <div className="m-4">
       <Image src={F4}></Image>
       <h1>Cromo</h1>
       <p className="text-lg text-gray-100 py-3">Age diretamente como um poderoso inibidor de apetite, trazendo saciedade e rápidos resultados na balança.</p>
       </div>


       <div className="m-4">
       <Image src={F5}></Image>
       <h1>Quitosana</h1>
       <p className="text-lg text-gray-100 py-3">Remédio Natural responsável por eliminar a gordura do corpo e regular o trânsito intestinal.</p>
       </div>


       <div className="m-4">
       <Image src={F6}></Image>
       <h1>Psyllium</h1>
       <p className="text-lg text-gray-100 py-3">Rico em fibra o psyllium auxilia na perda de peso, no controle do colesterol e na redução da pressão arterial.</p>
       </div>
       
       
        
        <div className="bg-gradient-to-b from-green-50 to-green-900 m-2 p-5 rounded-2xl">

        <div className="flex-col justify-center">
        <h1 className="text-center font-extrabold m-4">FAÇA O SEU PEDIDO!</h1>
        <p className="text-base text-gray-600">RECOMENDAMOS O TRATAMENTO DE 3 A 5 MESES PARA MELHORES RESULTADOS</p>
       
        <div id="compra">

        
        <div className="m-5 ">
        <a href="./compra1">
        <Image src={Art1}></Image>
        </a>
        </div>


        <div className="m-5 ">
        <a href="/compra2">
        <Image src={Art2}></Image>
        </a>
        </div>

        <div className="m-5 ">
        <a href="/compra3">
        <Image src={Art3}></Image>
        </a>
        </div>


        <div className="m-5 ">
        <a href="/compra4">
        <Image src={Art4}></Image>
        </a>
        </div>


        
        </div>
        </div>
        </div>
        </div>
        




        <footer className=" bg-gray-800 m-2 rounded-t-xl">
        <div className="text-white m-3 flex p-4">
         <Image src={Logopng} height={40} width={70}></Image>
         <div className="p-3">
         <a href="https://equipesaudeviva.com.br/oficial/?mcr=AFY17713867#perguntas"><li>Perguntas frequentes</li></a>
         <a><li>Política de privacidade</li></a>
         <a><li>Termos e condições</li></a>
         </div>
        </div>
        <div className="text-center flex justify-center p-4 text-2xl bg-green-500 m-4 rounded-xl"><a href="https://capsulbrasil.com.br/pedidos/">RASTREAR PEDIDO</a></div>
        <div></div>
        </footer>






        </div>
    
    )
}

export default Main;

