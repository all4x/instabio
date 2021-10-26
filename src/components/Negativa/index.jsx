import Detox from '../public/detox.png'


export default function Negativa() {
    return (
        <div className={`
            font-extralight text-4xl flex justify-center p-3 border-2 h-18 
            border-white  shadow-lg bg-opacity-25 bg-white
            text-black rounded-full	m-4
        `}>
            <div className="flex justify-center hidden">
        <Image src={Detox} width={250} height={250} ></Image>
        </div>  
        </div>
    )
}