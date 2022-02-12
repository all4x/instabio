import Topbar from "../queda/src/Topbar";
import Footer from '../../../components/Footer'
import Image from 'next/image'
import Fios from '../../../public/quedacabelo.jpg.webp'
import Newhair from "../queda/pages/newhair";
import Link from "next/link";
import Zap from '../../../src/components/whatsapp'

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
                    
                <div className="ml-5 mr-5 xl:flex xl:justify-center flex justify-between">
                    <div>
                    <p className="font-bold text-left ">Nylde Cosmeticos</p>
                    <p className="font-thin">08/02/2022 09h:00</p>
                    </div>
                </div>
                <Zap/>
            </div>
            <article className="max-w-prose mx-auto py-8 text-lg font-sans px-6">
                <div className="">
                    <div className="ml-4 text-lg">
                        <p>Fios de cabelo pela casa, no travesseiro, no ralo do banheiro e na escova. Essa é a situação vivida por muitas pessoas que sofrem com a queda capilar.<hr className="mb-10"></hr> </p>
                        <p className="">Quando o volume chega a cem fios perdidos por dia, é preciso ficar atento e investigar se há alguma doença por trás. Como é quase impossível contar cada fio perdido</p>
                        <p> <strong>"Se não ocorre uma reposição adequada, pode ser um sinal de doenças relacionadas ao couro cabeludo".</strong> <span className="font-sans"> </span></p>

                        <p className="mt-5">As principais condições que acentuam a perda são eflúvio telógeno, alopecia androgenética e alopecia areata. Saiba mais a seguir.</p>
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
                   
                   
                    <div className="space-y-4">
                    <div className="">
                    <div>
                        <h1 className="font-bold m-4 text-left">Outras causas que provocam a queda capilar</h1>            
                        <li className="font-bold ml-4">Falta de nutrientes: </li>
                        <p className="ml-4">o ferro é um dos minerais necessários para uma boa saúde dos cabelos. A falta do nutriente acentua a perda dos fios. O mesmo vale para vitaminas do complexo B. Por isso é fundamental seguir uma alimentação equilibrada. Se for o caso, o profissional pode sugerir suplementações.
                        </p>
                    </div>
                    </div>

                    <div className="">
                    <div>
                        <li className="font-bold ml-4">Químicas para cabelo:</li>
                        <p className="ml-4"> diversas intervenções estéticas podem causar danos. As progressivas à base de formol são um bom exemplo. "O fio alisado fica desidratado e bem quebradiço", destaca Lamunier. Já o tioglicolato de amônia, substância muito usada para fazer relaxamento nos cabelos, desestrutura as células do córtex dos fios, conhecido como o "coração" do cabelo. "Ele determina o formato dos fios, além da sua cor, força e elasticidade", diz o dermatologista.
                        </p>
                    </div>
                    </div>

                    <div className="">
                    <div>
                        <li className="font-bold ml-4">Covid-19: </li>
                        <p className="ml-4"> de acordo com os especialistas, também tem sido comum pessoas se queixando de queda capilar após contraírem o coronavírus. Mesmo com poucos estudos relacionados ao tema, os dermatologistas indicam que os fios podem cair depois da doença. O tratamento é individualizado.</p>
                    </div>
                    </div>
                    </div>

            </article>

            {/* CHAMADA PRA AÇÃO CRONOGRAMA */}
      <div className='bg-yellow-100 m-4 p-4 shadow-2xl rounded-lg'>
      <h1 className='text-center text-3xl mt-2 font-mono'>cronograma capilar</h1>

      <h2 className='mt-6 text-xl'> Aqui está seu <strong>cronograma gratuito,</strong> para deixar cabelo mais saudável, você pode esta baixando direto pelo whatsapp no botão abaixo </h2>

      <div className='flex justify-center pt-5'>
                        <Link href="/blog/queda/whatsapp/button-1">
                        <button className="p-2 pl-16 pr-16 bg-white text-gray-900 text-lg rounded-lg focus:border-4 border-green-300">Eu quero!</button>
                        </Link>
                        </div>


      </div>
      {/* FINALIZANDO  */}

            <Footer/>
        </div>
    );
}

export default index;