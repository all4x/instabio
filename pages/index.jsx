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
      
      <div>
          <main  className=" bg-yellow-50">
            <div className=""><Topbar /></div>
            <div className=""> <Social /></div>
          </main>
     
      
      </div>
      <footer className="text-center bg-yellow-50 h-screen">
      <div>
          <Footer></Footer>
      </div>
      </footer>
    </div>
  )
}
