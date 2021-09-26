import Image from "next/image"
import Seguro from '/public/selos-de-compra.png'


const Botao = () => {
    return(
        <div>
        <a href="#compra">
        <div className="m-4 rounded-full bg-green-400 flex 
        items-center justify-center h-16 
        text-center font-bold
        text-2xl animate-pulse">
        <div className="">
        <div className=""> <h1>EXPERIMENTE AGORA</h1></div>
        <div>
       
        </div>
        </div>
       </div>
       </a>
       <div className="flex justify-center">
       <Image src={Seguro} height={40} width={280}></Image>
       </div>
       </div>
    )
}

export default Botao;