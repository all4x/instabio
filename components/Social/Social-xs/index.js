
import Link from "next/link"



function Social() {
    return (
        <div className="space-y-2 p-4">

        {/* Loja Online */}

                <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <a href="https://loja.nyldecosmeticos.com.br/"><button class="bg-yellow-200  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">Loja Online</button></a>

            </div>
                </div>
               

            {/*whatsapp*/}
            <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-xl p-2">
                <div  className="text-center">
                    <Link href={"whatsapp"} ><button class="bg-yellow-200   hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">Consulta</button></Link>
            </div>
                </div>

                {/* NEWDETOX */}

                <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <Link href="newdetox-original">
                    <a><button class="bg-yellow-200   hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">New Detox</button></a>
                    </Link>
            </div>
                </div>

                 {/* localização*/}


                 <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-xl p-2">
                <div  className="text-center">
                    <a href="https://goo.gl/maps/XyfKMPcYKnTSJG959"><button class="bg-yellow-200  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">Localização</button></a>
            </div>
                </div>

               
      </div>
    )
}

export default Social
