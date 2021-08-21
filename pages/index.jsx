import Whatsapp from "../compontes/whatsapp";
import Title from "../compontes/title";
import Cronograma from '../compontes/cronograma'
import Negativa from '../compontes/Negativa'
import Ryck from "../compontes/ryck";
import Bruna from "../compontes/bruna";

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
      <Bruna></Bruna>
    </div>
  )
}


export default Home;