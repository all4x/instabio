import Topbar from './src/Topbar'
import Footer from  '../../../components/Footer'
import Head from  'next/head'

import React from 'react';

import Artic from './pages/artic'


export const queda = () => {
  return (
    <div>
      <Head>
          
      </Head>
            <Topbar></Topbar>
            <Artic/>
            
            <Footer></Footer>
    </div>
  );
};

export default queda