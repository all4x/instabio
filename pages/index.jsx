import Whatsapp from "../compontes/whatsapp";
import Title from "../compontes/title";
import Cronograma from '../compontes/cronograma'
import Negativa from '../compontes/Negativa'
import Jejum from "../compontes/jejum";


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