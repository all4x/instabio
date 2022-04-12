import Topbar from '../../components/Topbar2'
import Footer from '../../components/Footer'
import Image from 'next/image'



import Botao from '../../src/components/whatsapp'

import Foto1 from '../../public/IMG_8153.jpg'
import Foto2 from '../../public/IMG_8112.jpg'
import Foto3 from '../../public/IMG_8300.jpg'
import Foto4 from '../../public/IMG_6341.jpg'
import Foto5 from '../../public/IMG_7063.jpg'



function Terapia() {
    return (
        <div >
            <Botao/>
            <div className=' className="mb-15"'>
            <Topbar/>

            </div>


            <div className="mt-[-10%] xl:w-1/2 mx-auto ">
            <h1 className='text-center font-bold text-xl'><strong>Terapia Capilar: </strong> Saiba o que é, Como Funciona e Quando é Indicada</h1>
            <p className='text-left ml-5 mt-8 font-sans text-gray-600'>10/04/2022</p>
                <div className='flex justify-center m-6 '>
                    <Image src={Foto1} height={250} width={320} className="rounded-2xl"/>
                </div>
            
            <h1 className='text-center font-bold text-2xl'>Terapia Capilar: o que é?</h1>
            <div className='mt-5 text-gray-700 text-lg space-y-7 m-2'>
            <p className='text-left ml-5 '> A terapia capilar é a área que estuda os fios, couro cabeludo e pelos para tratar e manter a saúde deles. Ela irá realizar um diagnóstico e um tratamento com o objetivo de tratar a patologia de cada paciente, que pode ser: quedas de cabelo, infecções, quebra dos fios, inflamação e doenças no couro cabeludo.</p>
            <hr className='m-5'/>
            <p className='text-left ml-5 '> Essa patologia é tratada na área da tricologia, que é uma associação de técnicas terapêuticas, podendo ser técnicas manuais, aparelhos e/ou cosméticos. Esse tratamento vai prescrito para tratar e prevenir patologias do couro cabeludo e da haste capilar, conforme a melhor avaliação do seu profissional para o caso avaliado.  </p>
            <p className='text-left ml-5 '> O diagnóstico pode ser obtido por meio de exames de sangue, para descartar doenças infecciosas e autoimunes, ou pela tricoscopia do couro cabeludo.</p>
           
            </div>
                <div className='flex justify-center m-5'>
                    <Image src={Foto2} height={690} width={560} className="rounded-2xl"/>
                </div>
                <h1 className='text-center font-bold text-2xl'>Benefícios da Terapia Capilar</h1>
                
                <div className='text-left ml-7 font-sans text-gray-600 text-base mt-8 mb-8 mx-5 space-y-2'>


                    <li>Melhora a oxigenação e circulação sanguínea do couro cabeludo;</li>
                    <li>Alopecia;</li>
                    <li>Reduz a oleosidade e a queda capilar e descamação;</li>
                    <li>Melhora e trata a caspa (dermatite seborreica);</li>
                    <li>Trata a coceira e a sensibilidade do couro cabeludo;</li>
                    <li>Queda de cabelo.</li>
                
                
                </div>


                <h1 className='text-center font-bold text-xl m-5'>Tratamentos da Terapia Capilar - Confira os principais deles e saiba como funciona:</h1>

                {/* TRATAMENTOS */}

                <div className='space-y-6'>
                <div className='flex justify-center m-5'>
                                    <Image src={Foto3} height={690} width={560} className="rounded-2xl"/>
                                </div>
                                <h1 className='text-center font-bold text-2xl'> Detox capilar</h1>
                                <p className='text-left ml-5 text-lg text-gray-700 mt-5 m-5'>O Detox é uma limpeza profunda que higieniza, esfolia e pode até regenerar o couro cabeludo. Esse procedimento costuma ser o primeiro passo para os demais tratamentos e pode ser feito em todos os tipos de cabelos, muito utilizado em casos de descamação e excesso de oleosidade.</p>
                </div>
                            
                <div className='space-y-6'>
                <div className='flex justify-center m-5'>
                                    <Image src={Foto4} height={690} width={560} className="rounded-2xl"/>
                                </div>
                                <h1 className='text-center font-bold text-2xl'> Aromaterapia</h1>
                                <p className='text-left ml-5 text-lg text-gray-700 mt-5 m-5'> Utiliza-se de óleos essenciais e vegetais para auxiliar em algumas patologias do couro cabeludo e nos fios dos cabelos. Alguns óleos estimulam a circulação sanguínea, combatem a queda capilar, têm ação fungicida, anti-inflamatória, cicatrizante, bactericida einúmeros outros benefícios.</p>
                </div>

                <div className='space-y-6'>
                <div className='flex justify-center m-5'>
                                    <Image src={Foto5} height={690} width={560} className="rounded-2xl"/>
                                </div>
                                <h1 className='text-center font-bold text-2xl'> Alta frequência</h1>
                                <p className='text-left ml-5 text-lg text-gray-700 mt-5 m-5'>Essa técnica muito utilizada produz um campo eletromagnético, O gás tem propriedade ionizante quando em determinada energia gera a formação do gás ozônio. Trazendo benefícios como ativar a circulação sanguínea, fortalece o folículo piloso, reconstrói a cutícula capilar, auxilia nos danos provocados pela química nos cabelos, caspa intensa e alopecia por excesso de oleosidade. Como cicatrizante, a alta frequência capilar também cauteriza possíveis feridas no couro cabeludo.</p>
                </div>


                <div className='space-y-6'>
                <div className='flex justify-center m-5'>
                                    <img className="rounded-2xl" src='https://cdn.dooca.store/1464/files/terapia-capilar-blog-hsmed-7.jpg'></img>
                                </div>
                                <h1 className='text-center font-bold text-2xl'> Massagem capilar</h1>
                                <p className='text-left ml-5 text-lg text-gray-700 mt-5 m-5'>Esse método é um tratamento auxiliar, pois além de aliviar o estresse um fator importante para a queda dos cabelos ativa a circulação sanguínea do couro cabeludo, melhorando o transporte de nutrientes até os fios.</p>
                </div>


                <div className='space-y-6'>
                <div className='flex justify-center m-5'>
                                    <img className="rounded-2xl" src='https://cdn.dooca.store/1464/files/terapia-capilar-blog-hsmed-8.jpg'></img>
                                </div>
                                <h1 className='text-center font-bold text-2xl'>Microagulhamento</h1>
                                <p className='text-left ml-5 text-lg text-gray-700 mt-5 m-5'>É um procedimento feito com um “rolo com agulhas” que oferece microagulhadas à pele com o objetivo de gerar múltiplas micropunturas, estimulando o processo inflamatório que resultaria na produção dos fatores de crescimento. Essa técnica pode ser utilizada também com ativos que irão potencializar os resultados devido a melhora da absorção.</p>
                </div>




            </div>
            <Footer/>
        </div>
    );
}

export default Terapia;