import Head from 'next/head'
import Footer from '../components/Footer'
import Image from 'next/image'
import Eu from '../public/eu.png'

import Social from '../components/Social/Social-xs'
import Topbar from '../components/Topbar'



export default function Home() {
  return (
    <div className="" >
      <Head>
        <title>Nylde Cosmeticos © </title>
        <link rel="icon" href="/public/artlouja.png" />
        <meta name="description" content="A beleza e saúde do seu cabelo falam muito sobre você"/>
      </Head>
      
      <div>
      
          <div className=""><Topbar /></div>
          <main  className="  ">
          <div className='flex justify-center mt-6'>
          <Image className='' height={240} width={240} src={Eu}/>
          </div>
            
            <div className=""> <Social /></div>
          
          </main>
     
      
      </div>
      <footer className="text-center bg-yellow-50">
      <div>
          <Footer></Footer>
      </div>
      </footer>
    </div>
  )
}
