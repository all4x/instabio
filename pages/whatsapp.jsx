
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';

import Iphone from '/public/Iphone-spinner-2.gif'



const convertion = () => {
return <div>
        <Head>
            <meta http-equiv="refresh" content="5;https://api.whatsapp.com/send?phone=5563992072188" />
        </Head>
                <div class="h-screen bg-white">
        <div class="flex justify-center items-center h-full">
        <Image className='h-16 w-16' src={Iphone}></Image>
        </div>

        </div>
        </div>;
};

export default convertion;
