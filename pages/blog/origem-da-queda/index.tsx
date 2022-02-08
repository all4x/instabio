import Topbar from "../queda/src/Topbar";
import Footer from '../../../components/Footer'
import Image from 'next/image'
import Fios from '../../../public/quedacabelo.jpg.webp'




const index = () => {
    return (
        <div>
            <Topbar/>
            <div>
                <div className="mt-[5%] flex justify-center scale-90">
                    <Image src={Fios} height={360} width={360}/>
                </div>
                <div className="mr-5 mb-10 flex justify-center">
                    <div className="text-left text-3xl px-2 ml-6 bg-green-300 text-blue-900 shadow-xl xl:w-1/2 ">
                        <h1>Cabelo por toda a casa? Saiba o que provoca a queda dos fios...</h1>
                    </div>
                </div>
                <div className="ml-5 xl:flex xl:justify-center">
                    <div>
                    <p className="font-bold text-left ">Nylde Cosmeticos</p>
                    <p className="font-thin">08/02/2022 09h:00</p>

                    </div>

                </div>

            </div>
            <article className="max-w-prose mx-auto py-8 text-lg font-sans text-left px-6">
                <div className="flex justify-center">
                    <div className="ml-4">
                        <p>Fios de cabelo pela casa, no travesseiro, no ralo do banheiro e na escova. Essa é a situação vivida por muitas pessoas que sofrem com a queda capilar. Quando o volume chega a cem fios perdidos por dia, é preciso ficar atento e investigar se há alguma doença por trás.</p>
                        <p>Como é quase impossível contar cada fio perdido "Se não ocorre uma reposição adequada, pode ser um sinal de doenças relacionadas ao couro cabeludo" As principais condições que acentuam a perda são eflúvio telógeno, alopecia androgenética e alopecia areata. Saiba mais a seguir.</p>
                    </div>

                </div>

                <div className="">
                    <div>
                        <h1 className="font-bold m-4 text-left">Eflúvio telógeno</h1>
                        <p className="ml-4">Costuma ser causada por infecções, estresse, problemas na tireoide e deficiências nutricionais. No geral, os folículos do couro cabeludo ficam em fase de repouso e depois podem cair. "Ela diminui a densidade do cabelo", reforça Brenner.
                        O tratamento deve mirar a causa do problema, como a reposição de nutrientes ou o manejo do estresse.
                        </p>
                    </div>
                    </div>
                    
                    <div className="">
                    <div>
                        <h1 className="font-bold m-4 text-left">Alopecia androgenética</h1>
                        <p className="ml-4">É a famosa calvície. A condição tem influências hormonais e genéticas. "Em certo grau, a alopecia afeta em torno de 50% dos homens e 40% das mulheres acima de 50 anos".
                        Os sintomas mais expressivos tendem a surgir a partir dos 40 anos. Nos homens, são as "entradas" ou aquela "coroa" no topo da cabeça. Já nas mulheres, o problema costuma aparecer mais tardiamente e de forma menos intensa. Na fase da 
                        O tratamento inclui medicamentos administrados via oral e de uso tópico no couro cabeludo.
                        </p>
                    </div>
                    </div>

                    <div className="">
                    <div>
                        <h1 className="font-bold m-4 text-left">Alopecia areata</h1>
                        <p className="ml-5">Ela está relacionada a doenças autoimunes e provoca falhas arredondadas no couro cabeludo. De acordo com a especialista da SBD, atinge 1% da população.
                        Ao contrário da androgenética, que manifesta seus sintomas na fase adulta, ela também pode atingir crianças. O tratamento em geral é feito com remédios específicos aplicados na região do couro cabeludo e na cabeça.
                        </p>
                    </div>
                    </div>

                    <div className="">
                    <div>
                        <h1 className="font-bold m-4 text-left">Outras causas que provocam a queda capilar</h1>
                        
                        <li className="font-bold ml-4">Falta de nutrientes: </li>
                        <p className="ml-4">Ela está relacionada a doenças autoimunes e provoca falhas arredondadas no couro cabeludo. De acordo com a especialista da SBD, atinge 1% da população.
                        Ao contrário da androgenética, que manifesta seus sintomas na fase adulta, ela também pode atingir crianças. O tratamento em geral é feito com remédios específicos aplicados na região do couro cabeludo e na cabeça.
                        </p>
                    </div>
                    </div>

                    <div className="">
                    <div>
                        <h1 className="font-bold m-4 text-left">Outras causas que provocam a queda capilar</h1>
                        
                        <li className="font-bold ml-4">Falta de nutrientes: </li>
                        <p className="ml-4">o ferro é um dos minerais necessários para uma boa saúde dos cabelos. A falta do nutriente acentua a perda dos fios. O mesmo vale para vitaminas do complexo B. Por isso é fundamental seguir uma alimentação equilibrada. Se for o caso, o profissional pode sugerir suplementações.
                        </p>
                    </div>
                    </div>
                    

            </article>


            <Footer/>
        </div>
    );
}

export default index;