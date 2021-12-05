import Head from 'next/head'
import Footer from '../components/Footer'



import Social from '../components/Social/Social-xs'
import Topbar from '../components/Topbar'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Nylde Cosmeticos</title>
        <link rel="icon" href="/logo-1.png" />
      </Head>
    
     
      <main className="bg-yellow-50">
      <div className=""><Topbar /></div>
      <div className=""> <Social /></div>
  
      </main>
     
      <footer className="text-cente bg-yellow-50 h-40">
      <div>
          <Footer></Footer>
      </div>
      </footer>
    </div>
  )
}
