import link from 'next/link'

export default function Whatsapp() {
    return (
        <div className={`
            font-extralight text-4xl flex justify-center p-3 border-2 h-18 
            border-white  shadow-lg bg-opacity-25 bg-white
            text-black rounded-full	m-4
        `}>
            <a href="https://api.whatsapp.com/send?phone=5563992072188&"> Whatsapp</a>
            
        </div>
    )
}