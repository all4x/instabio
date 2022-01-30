import Image from 'next/image'
import Newhair from '/public/newhair.jpg'


function Hair() {
    return(
        <div className='  md:flex justify-between'>
            <div className='px-10 py-5 flex justify-center items-center '>
                <Image src={Newhair}/>
            </div>
            <div className='mx-5 text-center font-sans text-xl text-black '>
                
                <h2 className='text-3xl p-2 text-gray-900'>O blend de vitaminas número 1º do Brasil.</h2>
                <p className='px-5 py-2 text-xl text-left text-gray-900'>Composto por minerais, vitaminas e antioxidantes, o New Hair combate a queda capilar em até 96%.
                Além disso promove um crescimento acelerado dos fios em até 6x mais rápido e renova cabelo pele e unhas.
                Com apenas uma cápsula ao dia, é possível notar resultados incríveis na hidratação, brilho e comprimento dos seus fios.</p>
            </div>
        </div>
    )
}

export default Hair
