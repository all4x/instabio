import Head from 'next/head'
import Footer from '../components/Footer'



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
          <main  className=" bg-yellow-50">
            
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
