import Topbar from './src/Topbar'
import Footer from  './src/Redes-footer'

import Pixel from './src/Pixel'

import Head from  'next/head'

import About from '../queda-capilar/about'

import React from 'react';
import Nugget from '../queda-capilar/nugget';

export const queda = () => {
  return (
    <div>
      <Head>
          
      </Head>
            <Topbar></Topbar>
            <Nugget></Nugget>
            <About></About>
            <Pixel name='FACEBOOK_PIXEL_1' />
            <Footer></Footer>
    </div>
  );
};

export default queda