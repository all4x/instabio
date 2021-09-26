import Image from 'next/image'
import Whatsapp from '../Footer/whatsapp_1.jpeg'
import Whatsapp2 from '../Footer/whatsapp_2.jpeg'
import Whatsapp3 from '../Footer/photo_1.jpg'


const Home = () => {
    return(
        <div className="bg-green-400 space-y-5  rounded-2xl">
            <div className="p-5">
                <p className="text-center text-xl text-white font-serif ">Roseane Soares, 29 anos. Eliminou 12kg com o programa</p>
                <Image src={Whatsapp}></Image>
                <p className="py-6 font-light text-lg text-center text-white">Uma cliente que ficou muito feliz quando mandou essa foto pra gente, ela viu a diferença enorme em seu corpo e principalmente na região do abdômen. Ela perdeu mais de 10cm de barriga e está amando os resultados, além do mais está 100% saudável depois do nosso programa.</p>
               
                <hr className="m-4"></hr>

                <div className="bg-green-400 ">
                <p className="text-center text-xl text-white font-serif p-2">Luma Cristina, 26 anos. Eliminou mais de 16kg com o programa</p>
                <Image src={Whatsapp3}></Image>
                <p className="py-6 font-light text-lg text-center text-white">Pensa em uma mulher de bem com a vida e guerreira! Antes se limitava dietas e mais dietas para emagrecer e só gastava dinheiro e se privava muito. Após o uso correto da reeducação alimentar teve bastante resultado. Uma mulher que já era feliz e ficou mais feliz ainda com o seu novo corpo.</p>
                </div>
            </div>
           
        </div>
    )
}

export default Home;