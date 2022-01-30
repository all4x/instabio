import Topbar from './src/Topbar'
import Footer from  './src/Redes-footer'
import Head from  'next/head'
import About from '../queda-capilar/about'
import React from 'react';
import Nugget from '../queda-capilar/nugget';
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