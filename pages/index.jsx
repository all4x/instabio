import Head from 'next/head'
import Footer from '../components/Footer'



import Social from '../components/Social/Social-xs'
import Topbar from '../components/Topbar'


export default function Home() {
  return (
    <div className="" >
      <Head>
        <title>Nylde Cosmeticos</title>
        
      </Head>
      
      <div className='bg-yellow-50'>
          <main  className="">
            <div className=""><Topbar /></div>
            <div className=""> <Social /></div>
          </main>
     
      
      </div>
      <footer className="text-cente h-40 bg-yellow-50">
      <div>
          <Footer></Footer>
      </div>
      </footer>
    </div>
  )
}
