import Head from 'next/head'
import Pixel from '../src/components/Pixel'

export default function Home() {
    return(
        <div>
        <Head>
            <meta http-equiv="refresh" content="2;https://app.monetizze.com.br/r/AFY17713867?u=c&pl=CY99176&src=paginadevendas3" />
        </Head> 
        <div className=' flex flex-col items-center justify-center min-h-screen text-4xl font-light animate-pulse'>
        <h1>Carregando</h1>
        <Pixel name='FACEBOOK_PIXEL_1' />
        </div>

        </div>
    )
}