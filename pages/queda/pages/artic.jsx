import Link from 'next/link'
import Newhair from '../../newhair';


const artic = () => {
    return (
        <div>
          <main class="relative container mx-auto bg-white px-4">
            <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
            </div>

            <div class="mt-[-10%] w-1/2 mx-auto">
              <div class="relative pt-[56.25%] overflow-hidden rounded-2xl">
                <img class="w-full h-full absolute inset-0 object-cover" src="https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?cs=srgb&dl=pexels-element-digital-973401.jpg&fm=jpg" alt="" />
              </div>
            </div>

            <article class="max-w-prose mx-auto py-8">
              <h1 class="text-2xl font-bold">Queda de cabelo em excesso</h1>
              <p className='px-5 py-2 text-xl text-left text-gray-900'>Atualmente, 30% das mulheres apresentam algum grau de alopecia (<strong className='font-thin'>alopecia é uma condição em que ocorre perda de cabelo ou de pelo em qualquer parte do corpo.</strong>) durante a vida, podendo ser desencadeado por fatores genéticos, química, estresse e até mesmo lavagem incorreta da região.</p>
              <h2 class="mt-2 text-sm text-gray-500">Nylde, 25 Janeiro  2022</h2>

             

              <section>
            <h1 className='text-center font-extrabold text-3xl m-5 py-5'>Veja as 7 principais causas</h1>
            <div className='space-y-9'>
          <div className='space-y-9 py-3'>
                <h1 className='text-3xl ml-5 mb-2'>1. Estresse, ansiedade e cansaço</h1>
                <p className='font-sans text-left ml-4 mr-2 text-lg'>Seu estado emocional pode interferir, e muito, na saúde do seu cabelo: momentos de estresse, preocupação, ansiedade e cansaço podem enfraquecer os fios e causar queda além do normal, abrindo espaço até mesmo para doenças no couro cabeludo.</p>
                <strong className=' ml-4'>A solução:</strong>
                <p className='font-sans text-left ml-4 mr-2 text-lg'>tente separar momentos relaxantes no seu dia a dia, como criar uma rotina de exercícios que te tranquilizam! Aqui, a gente ensinou como melhorar sua rotina matinal e noturna!</p>
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

          <div className='space-y-9 py-3'>
                <h1 className='text-3xl ml-5 mb-2'>4. Dormir com o cabelo molhado</h1>
                <p className = 'font-sans text-left ml-4 mr-2 text-lg'>
                Não é mito que dormir de cabelo não é o recomendado, ok? É que o cabelo molhado no travesseiro pode abrir espaço para fungos que amam o calorzinho que fica dentro dos fios! 
                </p>
                <strong className=' ml-4'>A solução:</strong>
                <p className='font-sans text-left ml-4 mr-2 text-lg'> sempre que der, lave os cabelos horas antes de dormir ou pela manhã. Se não conseguir, recorra ao secador para secar as madeixas, mas sempre aplicando o protetor térmico! </p>
          </div>

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
      </section>

      {/* CHAMADA PRA AÇÃO CRONOGRAMA */}
      <div className='bg-yellow-200 m-4 p-4 shadow-2xl rounded-lg'>
      <p className='font-bold text-left ml-4 mr-2 text-2xl'> Dica extra:</p>
      <h1 className='text-center text-2xl mt-2 font-mono'>Siga um cronograma capilar</h1> 
                  
                  
      <h2 className='mt-6 text-xl'> Aqui está seu <strong>cronograma gratuito,</strong> para deixar cabelo mais saudável, você pode esta baixando direto pelo whatsapp no botão abaixo </h2>

      <div className='flex justify-center pt-5'>
                        <Link href="/queda/whatsapp/button-1">  
                        <button class="p-2 pl-16 pr-16 bg-white text-gray-900 text-lg rounded-lg focus:border-4 border-green-300">Eu quero!</button>
                        </Link>
                        </div> 


      </div>
      {/* FINALIZANDO  */}

      {/* Cta New Hair */}
      
      <div className='text-left text-2xl ml-6 mt-6 mb-10 space-y-3'>
            <p>Digamos que mesmo assim seu cabelo continua caindo, </p>
            <hr></hr>
            <p>nesse caso o recomendado é consultar um dermatologista para identificar a causa. e orientar o tratamento que pode ser feito com alimentação adequada, remédios, suplementos nutricionais ou shampoos.</p>
            <p>Mas na maioria dos casos o uso de uma vitamina suplemento pode resolver seu problema.</p>
          </div>
          <Newhair/>
            </article>
          </main>
        </div>
    );
}

export default artic;




/* 
<style>
  .pt-\[17\%\] {
    padding-top: 17%;
  }
  .mt-\[-10\%\] {
    margin-top: -10%;
  }
  .pt-\[56\.25\%\] {
    padding-top: 56.25%;
  }
</style>
 */
