
import Link from "next/link"



function Social() {
    return (
        <div className="space-y-2 p-4">
            {/*whatsapp*/}
            <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-xl p-2">
                <div  className="text-center">
                    <Link href={"whatsapp"} ><button class="bg-yellow-300   hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">Whatsapp</button></Link>
            </div>
                </div>

                {/* NEWDETOX */}

                <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <Link href="newdetox-original">
                    <a><button class="bg-yellow-300   hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">New Detox</button></a>
                    </Link>
            </div>
                </div>

                 {/* localização*/}


                 <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-xl p-2">
                <div  className="text-center">
                    <a href="https://goo.gl/maps/XyfKMPcYKnTSJG959"><button class="bg-yellow-300  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">Localização</button></a>
            </div>
                </div>

                {/* Loja Online */}

                <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <a href="https://loja.nyldecosmeticos.com.br/"><button class="bg-yellow-300  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">Loja Online</button></a>
                    <p className="font-semibold text-gray-800  text-sm py-2">Disponível a pronta entrega em Araguaína-To </p>
            </div>
                </div>
      </div>
    )
}

export default Social
