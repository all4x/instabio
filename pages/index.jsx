import Whatsapp from "../src/components/whatsapp";
import Title from "../src/components/title";
import Cronograma from '../src/components/cronograma'
import Jejum from "../src/components/jejum";
import Negativa from "../src/components/Negativa";


function Home() {
  return(
    <div className={`
        h-screen 
        bg-gradient-to-tr from-yellow-100 to-yellow-400 
    
    `}>
      <Title></Title>
      <Whatsapp></Whatsapp>
      <Cronograma></Cronograma>
      <Jejum></Jejum>
      <Negativa></Negativa>
    </div>
  )
}


export default Home;