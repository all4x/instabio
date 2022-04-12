
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import Button from '@mui/material/Button';

import Logo from '/public/boneca 100x100.png'



const convertion = () => {
return <div>
        <Head>
        </Head>
        <div className=" bg-white mb-40">
        
        <div className=" items-center flex justify-center mt-24 ">
        <Image className=' h-16 w-16' src={Logo}></Image>
        </div>
        <p className='text-center font-semibold text-2xl mt-4'>Tudo Certo!</p>
        <p className="text-xl font-sans text-center mt-1 p-4"> click no botão abaixo para ser direcionada para o whatsapp</p>
        <div className="flex justify-center">
        <a href='https://api.whatsapp.com/send?phone=5563992072188&text=Ol%C3%A1%20gostaria%20de%20realizar%20minha%20primeira%20consulta%20em%20terapia%20capilar😁'>
        <Button variant="contained" color="success">
            Whatsapp
            </Button>
            </a>
        </div>
        
        </div>
        <Footer/>
        </div>;
};

export default convertion;


//     https://wa.me/5563992072188?text=Ol%C3%A1%2C+Acabei+de+preencher+seu+formul%C3%A1rio+e+gostaria+de+realizar+minha+primeira+consulta+em+terapia+capilar%F0%9F%98%81.
