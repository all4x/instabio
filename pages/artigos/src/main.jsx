import Image from 'next/image'
import Art from './images/art-loja.png'

export default function Main() {
    return(
        <div className="h-30 bg-gradient-to-l from-yellow-300">
            <div className="flex justify-between">
                <h1 className="m-2 text-xl font-extralight xl:font-medium xl:text-2xl ">NyldeCosmeticos</h1>
                <div className="m-2 ">
                   <Image src={Art} width={50} height={80} className="animate-pulse "></Image>
                </div>
            </div>
           
        </div>
    )
}