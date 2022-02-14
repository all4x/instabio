import Link from 'next/link'



const artic = () => {
    return (
        <div>
      {/* CHAMADA PRA AÇÃO CRONOGRAMA */}
      <div className='bg-yellow-100 m-4 p-4 shadow-2xl rounded-lg'>
      <h1 className='text-center text-3xl mt-2 font-mono'>cronograma capilar</h1>
      <h2 className='mt-6 text-xl'> Aqui está seu <strong>cronograma gratuito,</strong> para deixar cabelo mais saudável, você pode esta baixando direto pelo whatsapp no botão abaixo </h2>

      <div className='flex justify-center pt-5'>
                        <Link href="/whatsapp">
                        <button class="p-2 pl-16 pr-16 bg-white text-gray-900 text-lg rounded-lg focus:border-4 border-green-300">Eu quero!</button>
                        </Link>
                        </div>


      </div>
      {/* FINALIZANDO  */}

        </div>
    );
}

export default artic;