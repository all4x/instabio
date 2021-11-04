import Head from 'next/head'
import Pixel from '../src/components/Pixel'

export default function Home() {
    return(
        <div>
        <Head>
            <meta http-equiv="refresh" content="2;https://ev.braip.com/ref?pl=pla962yy&ck=chew8wl8&af=afi3yz2z9" />
        </Head> 
        <div className=' flex flex-col items-center justify-center min-h-screen text-4xl font-light animate-pulse'>
        <h1>Carregando</h1>
        <Pixel name='FACEBOOK_PIXEL_1' />
        </div>

        </div>
    )
}