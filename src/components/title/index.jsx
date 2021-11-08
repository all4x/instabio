import Image from 'next/image'
import Art from './art loja.png'

export default function Title() {
    return(
        <div className={`
            text-4xl font-bold text-white  p-6 flex-col justify-center  text-center
            bg-clip-text 
            `}>
            <h1>Nylde Cosmeticos</h1>
            <div className="flex justify-center
             drop-shadow-xl animate-pulse
            "> <Image src={Art}  width={140} height={140}></Image></div>
        </div>
           
    )
}