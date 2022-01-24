import Image from 'next/image'
import Newhair from '/public/newhair.jpg'
import Link from 'next/link'
import React from 'react';

export default function About() {
  return (
  <div className='m-2'>
      <section>
            <h1 className='text-center font-extrabold text-3xl m-5 py-5'>Veja as 10 principais causas</h1>
            <div className='space-y-9'>
          <div className=''>
                <h1 className='text-3xl ml-5 mb-2'>1. Alimentação pobre em nutrientes e vitaminas</h1>
                <p className='font-sans text-left ml-4 mr-2 text-xl'>
                    Uma alimentação pobre em nutrientes, vitaminas e minerais, como proteínas, o zinco, o ferro e as vitaminas A e C, pode ser uma causa da do cabelo cair. Isto ocorre porque esses nutrientes ajudam no crescimento e fortalecimento capilar, por isso, uma dieta pobre nestes nutrientes favorece a queda dos cabelos.
                </p>
          </div>

          <div className=''>
                <h1 className='text-3xl ml-5 mb-2'>2. Excesso de estresse e ansiedade</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-xl'>
                O excesso de estresse e ansiedade podem causar um desequilíbrio hormonal do cortisol, um hormônio relacionado ao estresse, que quando está com os níveis aumentados pode provocar a queda excessiva do cabelo, com aumento do número de fios que caem por dia. Isto ocorre devido a uma condição chamada eflúvio telógeno caracterizado pela queda generalizada do cabelo no couro cabeludo e interrupção do crescimento do fio. 
                </p>
          </div>

          <div className=''>
                <h1 className='text-3xl ml-5 mb-2'>3. Menopausa ou andropausa</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-xl'>
                A menopausa, que é a interrupção da menstruação por um processo natural de envelhecimento da mulher em que o ovário deixa de produzir estrógeno, ou a andropausa, que é a menopausa masculina em que os testículos diminuem a produção de testosterona, provocam uma alteração hormonal que pode fazer com que o cabelo caia de forma mais frequente.
                </p>
          </div>

          <div className=''>
                <h1 className='text-3xl ml-5 mb-2'>4. Período pós-parto</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-xl'>
                Durante a gravidez os hormônios estrógeno, progesterona, ocitocina, HCG e prolactina encontram-se elevados, o que deixa o cabelo com um aspecto bonito e brilhante. No entanto, imediatamente após o parto, os níveis hormonais diminuem rapidamente, principalmente de estrógeno e progesterona, voltando aos valores próximos do normal em 24 horas após o nascimento do bebê. Isto pode fazer com que o cabelo fique mais fraco e caia mais.
                </p>
          </div>

          <div className=''>
                <h1 className='text-3xl ml-5 mb-2'>5. Anemia</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-xl'>
                A anemia por carência de ferro pode causar queda excessiva do cabelo, pois o ferro é um mineral essencial para a produção que hemoglobina, uma proteína que carrega oxigênio nas células vermelhas do sangue para todos os tecidos do corpo, inclusive o couro cabeludo, que ao receber menos oxigênio e nutrientes, pode causar enfraquecimento e a queda dos fios
                </p>
          </div>

          <div className=''>
                <h1 className='text-3xl ml-5 mb-2'>6. Uso de produtos químicos no cabelo </h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-xl'>
                O uso de produtos químicos no cabelo como formol, alisantes ou tintura de cabelo podem causar enfraquecimento dos fios que podem se tornar mais secos e quebradiços, principalmente na raiz, além de danos na cutícula do fio, o que pode levar a queda de cabelo.
                </p>
          </div>

          <div className=''>
                <h1 className='text-3xl ml-5 mb-2'>7. Uso de medicamentos</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-xl'>
                Alguns medicamentos como varfarina, heparina, carbimazol, isotretinoína, acitretina, lítio, betabloqueadores, colchicina, anfetaminas e medicamentos contra o câncer podem favorecer a queda de cabelo.
                </p>
          </div>

          <div className=''>
                <h1 className='text-3xl ml-5 mb-2'>8. Infecção por fungos</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-xl'>
                A infecção do couro cabeludo por fungos, chamada de tinea, tinha ou micose, pode favorecer a queda excessiva dos fios de cabelo, além de causar coceira intensa no couro cabeludo.
                </p>
          </div>

          <div className=''>
                <h1 className='text-3xl ml-5 mb-2'>9. Hipotireoidismo</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-xl'>
                O hipotireoidismo é um desequilíbrio dos hormônios produzidos pela tireóide que encontram-se diminuídos, principalmente T3 e T4, que são essenciais para o funcionamento de todas as células do corpo, e que pode deixar os cabelos mais finos, secos e sem brilho, causando a queda.
                </p>
          </div>

          <div className=''>
                <h1 className='text-3xl ml-5 mb-2'>10. Alopécia areata</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-xl'>
                A alopécia areata é uma condição causada por fatores genéticos ou doenças autoimunes como vitiligo ou lúpus, que fazem com que o cabelo caia de forma rápida na cabeça, e/ou em outras regiões do corpo que tenham pêlos, como sobrancelha, barba, pernas e braços.
                </p>
          </div>
          </div>
      </section>


      {/* NEW CALL */}
     
      <div className='  md:flex justify-between'>
            <div className='px-10 py-5 flex justify-center items-center '>
                <Image src={Newhair}/>
            </div>
            <div  className="text-center">
                  
                  <Link href="https://www.nyldecosmeticos.com.br/queda-capilar/whatsapp/button-1">
                  
                  <button class="p-2 pl-16 pr-16 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Whatsapp</button>
                  </Link>
                  <p className='animate-pulse mb-3 mt-2'>Disponível em Araguaína-To com frete gratis</p>
            </div>
        </div>
  </div>

  )}


