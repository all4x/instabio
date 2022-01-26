
import Link from "next/link"



function Social() {
    return (
        <div className="space-y-2 mt-5">
            {/*whatsapp*/}
            <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <a href="https://api.whatsapp.com/send?phone=5563992072188&"><button class="bg-yellow-200  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-80">Whatsapp</button></a>
            </div>
                </div>

                {/* NEWDETOX */}

                <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <Link href="/newdetox">
                    <a><button class="bg-yellow-200  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-80">New Detox</button></a>
                    </Link>
            </div>
                </div>

                 {/* localização*/}


                 <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full p-2">
                <div  className="text-center">
                    <a href="https://goo.gl/maps/XyfKMPcYKnTSJG959"><button class="bg-yellow-200  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-80">Localização</button></a>
            </div>
                </div>

                {/* Instagram */}

                <div className=" text-4xl bg-opacity-25 bg-white text-black rounded-full	p-2">
                <div  className="text-center">
                    <a href="https://www.instagram.com/nyldecosmeticos/"><button class="bg-yellow-200 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-80">Instagram</button></a>
            </div>
                </div>
      </div>
    )
}

export default Social
