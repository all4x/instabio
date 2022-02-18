

import Topbar from '../../../components/Topbar'
import Footer from '../../../components/Footer'
import Image from 'next/image'
import Maisena from '../../../public/maisena.jpg'
import Fios from '../../../public/quedacabelo.jpg.webp'
import Link from 'next/link'
import Newhair from '../../../pages/blog/queda/pages/newhair'
import { Button } from "@mui/material";
import Zap from '../../../src/components/whatsapp'


const index = () => {
    return (
        <div>
            <Topbar/>
            <Zap/>
                <div className=''>
                    <h1 className="text-center font-bold text-white text-2xl mt-5 bg-yellow-400 mx-5">Como fazer desmaia cabelo com Maizena</h1>
              
                </div>
                <article className="max-w-prose mx-auto py-7">
                    <div className="m-4">
                    <Image src={Maisena} className="m-1/2"/>
                    </div>
                <h1 className="text-2xl font-sans ml-3 m-6">Modo de Preparo:</h1>
                <div className="ml-5 font-sans text-lg p-4 space-y-2">
                <p> 1. Lave os cabelos com shampoo para sair a sujeira do cabelo, seque bem.</p>
                <p> 2. Coloque a água dentro de uma panela, adicione a maizena.</p>
                <p> 3. Leve para o fogo baixo, misture até engrossar.</p>
                <p> 4. Despgue o fogo, deixe esfriar.</p>
                <p> 5. Adicione o óleo de coco e o condicionador, misture bem.</p>
                <p> 6. Passe nos cabelos, mecha por mecha, não passe na raiz.</p>
                <p> 7. Deixe por 30 minutos.</p>
                <p> 8. Lave bem, e pronto!</p>
                <p> 9.Repita a cada 15 dias, os resultados são imediatos.</p>  
                </div>

                {/* cta - for new hair  */}
                <div className="text-center m-5 text-lg font-medium bg-green-500"> Conheça o melhor suplemento capilar anti queda</div>
                <section>
                    <Newhair/>
                    <div className="flex justify-center">
                    <Link href='/whatsapp'>
                    <Button variant="contained" color="success">
                    Comprar pelo Whatsapp
                    </Button>
                    </Link>
                    </div>
                </section>


                </article>
                <div className="">
                <section className='flex justify-center p-5'>
                <div className=''>
                <h1 className='text-center font-normal text-3xl'>Postes relacionados</h1>
                <Image src={Fios} height={360} width={360}/>
                <p className='text-center text-lg font-mono'>Saiba o que provoca Queda Capilar...</p>
                </div>
                </section>
                <div className='text-center mt-2 p-2'>
                    <Link href="/blog/queda">
                    <button  className="  font-black text-xl p-2 pl-24 pr-24 bg-yellow-500 text-gray-100  rounded-lg focus:border-4 border-green-300">Ver Mais</button>
                    </Link>
                </div>

                </div>
            <Footer/>
        </div>
    );
}

export default index;