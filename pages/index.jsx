import Whatsapp from "../src/components/whatsapp";
import Title from "../src/components/title";
import Cronograma from '../src/components/cronograma'
import Negativa from '../src/components/Negativa'
import Jejum from "../src/components/jejum";


function Home() {
  return(
    <div className={`
        h-screen 
        bg-gradient-to-tr from-yellow-100 to-yellow-500 
    
    `}>
      <Title></Title>
      <Whatsapp></Whatsapp>
      <Cronograma></Cronograma>
      <Negativa></Negativa>
      <Jejum></Jejum>
    </div>
  )
}


export default Home;