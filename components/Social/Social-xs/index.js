
import Link from "next/link"



function Social() {
    return (
        <div>
            <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <a href="https://api.whatsapp.com/send?phone=5563992072188&"><button class="bg-yellow-200  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-80">Whatsapp</button></a>
            </div>
                </div>

                {/* REDES SOCIAIS */}

                <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <Link href="/liftdetox">
                    <a><button class="bg-yellow-200  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-80">Lift Detox</button></a>
                    </Link>
            </div>
                </div>

                 {/* REDES SOCIAIS */}


                 <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <a href="https://goo.gl/maps/XyfKMPcYKnTSJG959"><button class="bg-yellow-200  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-80">Localização</button></a>
            </div>
                </div>

                {/* REDES SOCIAIS */}

                <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full	p-2">
                <div  className="text-center">
                    <a href="https://www.instagram.com/nyldecosmeticos/"><button class="bg-yellow-200 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-80">Instagram</button></a>
            </div>
                </div>
      </div>
    )
}

export default Social
