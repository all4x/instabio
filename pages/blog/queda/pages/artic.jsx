import Link from 'next/link'
import Newhair from '../pages/newhair';
import Image from 'next/image'
import Nylde from '../../../../public/nylde.png'
import newhair from '../../../../public/new-2.jpg';
import Fios from '../../../../public/quedacabelo.jpg.webp'
import Cronograma from '../../cronograma-gratuito'

import Checkout from '../src/checkout'


const artic = () => {
    return (
        <div>
          <main class="relative container mx-auto bg-white px-4">
            <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
            </div>

            <article class="max-w-prose mx-auto py-8">
              <h1 class="text-2xl font-bold mb-5">Queda de cabelo em excesso</h1>
              <p className='text-lg text-left text-black'>Atualmente, 30% das mulheres apresentam algum grau de alopecia (<strong className='font-thin'>alopecia é uma condição em que ocorre perda de cabelo ou de pelo em qualquer parte do corpo.</strong>) </p>
              <section>
                
            <h1 className='text-center font-extrabold text-3xl m-5 py-5'>Veja as 6 principais causas</h1>
            <div className='space-y-9'>
          <div className='space-y-9 py-3'>
                <h1 className='text-3xl ml-5 mb-2'>1. Estresse, ansiedade e cansaço</h1>
                <p className='font-sans text-left ml-4 mr-2 text-lg'>Seu estado emocional pode interferir, e muito, na saúde do seu cabelo: momentos de estresse, preocupação, ansiedade e cansaço podem enfraquecer os fios e causar queda além do normal, abrindo espaço até mesmo para doenças no couro cabeludo.</p>
                <strong className=' ml-4'>A solução:</strong>
                <p className='font-sans text-left ml-4 mr-2 text-lg'>tente separar momentos relaxantes no seu dia a dia, como criar uma rotina de exercícios que te tranquilizam!</p>
          </div>

          <div className='space-y-9 py-3'>
                <h1 className='text-3xl ml-5 mb-2'>2. Chapinha e secador em excesso</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-lg'> O excesso de estresse e ansiedade podem causar um desequilíbrio hormonal do cortisol, um hormônio relacionado ao estresse, que quando está com os níveis aumentados pode provocar a queda excessiva do cabelo, com aumento do número de fios que caem por dia. Isto ocorre devido a uma condição chamada eflúvio telógeno caracterizado pela queda generalizada do cabelo no couro cabeludo e interrupção do crescimento do fio. </p>
                <strong className=' ml-4'>A solução:</strong>
                <p className='font-sans text-left ml-4 mr-2 text-lg'> tente deixar o secador e a chapinha só para ocasiões especiais ou quando você precisar secar o cabelo antes de dormir, por exemplo. Também vale aplicar, sempre, um protetor térmico em forma de óleo ou leave-in nas madeixas antes de alisar!</p>
          </div>

          <div className='space-y-9 py-3'>
                <h1 className='text-3xl ml-5 mb-2'>3. Escovas de alisamento</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-lg'>
                Para quem faz escovas de alisamento e vê os fios caindo além do normal, o motivo pode, sim, ser a química. É que por mais que o cabelo pareça brilhoso, saudável e bonito depois de retocar a progressiva, por dentro, ele vai ficando cada vez mais sem nutrientes e muito mais fino e fraco.</p>
                <strong className=' ml-4'>A solução:</strong>
                <p className='font-sans text-left ml-4 mr-2 text-lg'> a dica é fazer um cronograma capilar para devolver os nutrientes ao fio com hidratação, nutrição e reconstrução. Usar shampoos e condicionadores à base de Arginina também pode ser uma boa ideia, porque a substância devolve massa ao interior do fio. </p> 
          </div>

          {/*  CTA 1 */}

          <div className='space-y-9 py-3'>
                <h1 className='text-3xl ml-5 mb-2'>4. Não Utilizar um suplemento especifico para os cabelos</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-lg'>
                O papel do suplemento fica claro quando o assunto é <strong> queda capilar </strong>pós sua função é repor os minerais e vitaminas gerando resultados de dentro para fora

                </p>
                <strong className=' ml-4'>A solução:</strong> 
                <p className='font-sans text-left ml-4 mr-2 text-lg'> O que eu indico essencialmente para você que sofre com queda, é o encapsulado da linha New Hair que combate a queda capilar em até 96%.</p>
          </div>
          <div>

          <Newhair/>
          </div>

          {/* FIM DO CTA 1 */}

          <div className='space-y-9 py-3'>
                <h1 className='text-3xl ml-5 mb-2'>5. Aplicar creme e máscara na raiz do cabelo</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-lg'>
                Tem o hábito de aplicar creme de pentear, óleo e a máscara de hidratação na raiz, bem pertinho do couro cabeludo? Pois saiba que esse também pode ser um dos motivos que levam à queda: é que o acúmulo de produto cobre os folículos, levando à caspa – chamada de dermatite seborreica. A caspa enfraquece os folículos e os fios, facilitando a queda.                 </p>
                <strong className=' ml-4'>A solução:</strong>
                <p className='font-sans text-left ml-4 mr-2 text-lg'> a primeira mudança é deixar de aplicar produtos de cabelo na raiz! O certo é aplicar a uns dedinhos de distância, ou seja, só no comprimento e nas pontas. Depois, vale usar um pré-shampoo ou um shampoo anti-resíduo para fazer uma limpeza profunda na raiz dos cabelos.  </p>
          </div>

          <div>
          </div>

          <div className='space-y-9 py-3'>
                <h1 className='text-3xl ml-5 mb-2'>6. Prender o cabelo molhado </h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-lg'>
                Da mesma forma que dormir com o cabelo molhado enfraquece o cabelo, prender os fios úmidos também não faz nada bem, viu? É que a umidade também pode causar fungos e deixar o cabelo mais fraco – sem contar os elásticos e presilhas, que podem quebrar o cabelo mais fácil quando os fios estão molhados.                 </p>
                <strong className=' ml-4'>A solução:</strong>
                <p className='font-sans text-left ml-4 mr-2 text-lg'> tente deixar os cabelos secarem antes de prendê-los, ok? Um simples rabo de cavalo já pode enfraquecer os fios! </p>

          </div>
          </div>

          <div>
              <Cronograma/>
          </div>
      </section>

      


    
      {/* FINALIZANDO  */}
      <h1 className=' text-center text-xl font-black animate-pulse p-4'>Peça o seu New Hair aqui!👇</h1>
          <Checkout/>
            </article>
          </main>

          <section className='flex justify-center p-5'>
          <div className=''>
          <h1 className='text-center font-normal text-3xl'>Postes relacionados</h1>
          <Image src={Fios} height={360} width={360}/>
          <p className='text-center text-lg font-mono'>Saiba o que provoca Alopecia...</p>
          </div>
          </section>
          <div className='text-center mt-2 p-2'>
            <Link href="/blog/origem-da-queda">
            <button  className="  font-black text-xl p-2 pl-24 pr-24 bg-yellow-500 text-gray-100  rounded-lg focus:border-4 border-green-300">Ver Mais</button>
            </Link>
          </div>
        </div>
    );
}

export default artic;