
import { Button } from "@mui/material";
import Frete from '../../../public/Frete-gratis.png'
import Kit1 from '../../../public/kit1.png'
import kit2 from '../../../public/mockup-2.png'
import kit3 from '../../../public/mockup-3.png'
import kit5 from '../../../public/mockup-5.png'

import Image from "next/image";
import Link from "next/link";

const index = () => {
    return (
        <div>
            {/* CHECKOUT */}
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
                <h2 className='text-gray-600'>Por 6x <strong className=' text-black text-3xl font-black'>18,33</strong> sem juros</h2>
                <p className='text-gray-600 font-extrabold'>ou R$110,00 à vista</p>
              </div>
            </div>
            <hr className="bg-yellow-700 m-3 p-[0.2%]" />
            <div className='flex justify-center '>
            <a href='https://nyldecosmeticos.lojaintegrada.com.br/new-detox'>
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
        </div>
    );
}

export default index;