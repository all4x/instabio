
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
        <a href='https://api.whatsapp.com/send?phone=5563992072188&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20Terapia%20Capilar!'>
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


//             <meta http-equiv="refresh" content="0;https://api.whatsapp.com/send?phone=5563992072188" />
