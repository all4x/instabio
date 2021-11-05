import Foto from '../Main/design_sem.png'
import Image from 'next/image'


const Botao = () => {
    return(
        <div className="">
            <div className="p-4">
                <h1 className="text-5xl p-5 text-center font-black bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-900">Definitivamente Magra</h1>
                <div className="bg-gray-200 py-2 border-b-4 rounded-2xl shadow-xl">
                    <h2 className="text-center font-bold text-xl">Programa de Reeducação Alimentar Ajuda <span className="text-green-500"> Mais de 10.000 Mulheres nos Últimos 2 Anos</span> que Precisavam Reduzir Drasticamente Suas GORDURAS CORPORAIS em poucos dias!</h2>
                </div>
                <a href="/whatsapp">
                <div  className="text-center animate-pulse my-4 bg-green-600 p-2 font-extrabold text-white text-2xl rounded-full">
                    <h1>Baixar Gratuitamente Pelo Whatsapp</h1>
                </div>
                </a>
                <p className="text-center">Atenção: os resultados poderão variar de pessoa para pessoa</p>
            </div>
           
            <div className="flex justify-center p-2 xl:hidden">
                <Image src={Foto}></Image>
            </div>
            </div>
           
    )
}

export default Botao;