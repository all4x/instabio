import Head from 'next/head'
import Footer from '../components/Redes-footer'



import Social from '../components/Social/Social-xs'
import Topbar from '../components/Topbar'


export default function Home() {
  return (
    <div className="" >
      <Head>
        <title>Nylde Cosmeticos</title>
        <meta name="google-site-verification" content="LiM8wfP2SNFWeQgP0f4uRvW0tKH6tmAerR0W5Me3Rmw" />
      </Head>
      
      <div>
          <main  className=" bg-yellow-50">
            <div className=""><Topbar /></div>
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
