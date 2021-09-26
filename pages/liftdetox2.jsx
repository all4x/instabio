import Head from "next/head";
import Main from '../src/components/Main'
import Quadro from '../src/components/Quadro'
import Pixel from "../src/components/Pixel";
import Botaozap from "../src/components/Botaozap";




export default function Home() {
    return(
        <div>
        <Head>
        <title>Nova Forma De Fazer Dieta</title>
        <meta property="og:title"           content="DietaVirtual" /> 
        <meta property="og:type"            content="article" /> 
        <meta property="og:url"             content="www.br116na-madruga.ga/lifitdetox2" /> 
        <meta content='www.br116na-madruga.ga/liftdetox2' ng-if='og_meta.url' property='og:url'/>
        <link rel="icon" href="/detox.svg" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="author" content="Nylde"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta property="og:description" content="A melhor forma de perde peso"/> 
        <meta name="facebook-domain-verification" content="lttx508tcn1mshd90ranof9c7a422l" />   
        <meta property="og:image"  content="https://www.br116na-madruga.ga/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fdepo1.58deb121bd4552dfa44ffd1a021b0a5d.jpeg&w=384&q=75" />
        </Head>
        <Main></Main>
        <Quadro></Quadro>
        <Botaozap></Botaozap>  
        <Pixel name='FACEBOOK_PIXEL_1' />






        <footer className="felx justify-center text-center">
            <div className='text-base font-normal p-4 text-blue-700 space-x-3 '>  
                <a href="/privacy-policy"> Política de Privacidade</a>
                <a href="/privacy-policy">Termos de Uso</a>
            </div>
        </footer>   
        </div>
    )


}