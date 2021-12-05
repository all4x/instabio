import Head from 'next/head'



import Social from '../components/Social/Social-xs'
import Topbar from '../components/Topbar'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Nylde Cosmeticos</title>
        <link rel="icon" href="/logo-1.png" />
      </Head>
    
     
      <main className="bg-yellow-50 h-screen">
      <div className=""><Topbar /></div>
      <div className=""> <Social /></div>
     

      
     {/* FAZER SOCIAL RESPONSIVEL -MD E XL */}
   
    

      </main>
      <div>{/*Player */}</div>

    </div>
  )
}
