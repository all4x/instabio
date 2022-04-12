
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import Button from '@mui/material/Button';
import Link from 'next/link'


import Logo from '/public/boneca 100x100.png'
import Foto1 from '../public/IMG_8153.jpg'



const convertion = () => {
return <div>
        <Head>
        </Head>
        <div className=" bg-white mb-40">
        
        <div className=" items-center flex justify-center mt-5 ">
        <Image  src={Logo} height={70} width={70}></Image>
        </div>
        <p className='text-center font-semibold text-2xl mt-4'>Tudo Certo!</p>
        <p className="text-xl font-sans text-center mt-1 p-4"> click no botão abaixo para ser direcionada para o whatsapp</p>
        <div className="flex justify-center">
        <a href='https://api.whatsapp.com/send?phone=5563992072188'>
        <Button variant="contained" color="success">
            Whatsapp
            </Button>
            </a>
        </div>
        <hr className="m-5"/>

        <div className='flex justify-center m-4'>
            <Image src={Foto1} height={250} width={320} className="rounded-2xl"/>

        </div>
        <h1 className='text-center text-xl m-4 mt-6 font-bold'>Saiba como funciona a Terapia Capilar</h1>
        <div className="flex justify-center">
            <Link href={'/blog/terapia'}>
            <Button variant='contained' color="warning"> 
        Como Funciona
        </Button>
            
            </Link>
       
        </div>
        
        
        </div>
        <Footer/>
        </div>;
};

export default convertion;


//     https://wa.me/5563992072188?text=Ol%C3%A1%2C+Acabei+de+preencher+seu+formul%C3%A1rio+e+gostaria+de+realizar+minha+primeira+consulta+em+terapia+capilar%F0%9F%98%81.
