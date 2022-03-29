
import Link from "next/link"



function Social() {
    return (
        <div className="space-y-2 p-4">
            {/*whatsapp*/}
            <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-xl p-2">
                <div  className="text-center">
                    <Link href={"whatsapp"} ><button class="bg-yellow-400   hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">Whatsapp</button></Link>
            </div>
                </div>

                {/* NEWDETOX */}

                <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <Link href="newdetox-original">
                    <a><button class="bg-yellow-400   hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">New Detox</button></a>
                    </Link>
            </div>
                </div>

                 {/* localização*/}


                 <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-xl p-2">
                <div  className="text-center">
                    <a href="https://goo.gl/maps/XyfKMPcYKnTSJG959"><button class="bg-yellow-400  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">Localização</button></a>
            </div>
                </div>

                {/* Instagram */}

                <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <a href="https://www.instagram.com/nyldecosmeticos/"><button class="bg-yellow-400  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl w-80">Instagram</button></a>
            </div>
                </div>
      </div>
    )
}

export default Social
