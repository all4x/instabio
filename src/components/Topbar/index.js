import Image from 'next/image'
import Logo2 from '/public/logo2.png'



function Topbar() {
    return (
        <div className="pb-5 xl:flex xl:py-2 sm:px-3 md:flex  justify-between bg-white p-2 rounded-b-xl border-gray-300 shadow-lg">
            <div className="flex justify-between  ">
                <Image src={Logo2}  class=" cursor-pointer"/>    
            </div>
        </div>
    )
}

export default Topbar
