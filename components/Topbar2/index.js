import Image from 'next/image'
import Logo2 from '/public/logo2.png'



function Topbar() {
    return (
        <div className=" xl:flex xl:py-2 sm:px-3 md:flex  justify-between bg-white p-6 ">
            <div className="flex justify-between  ">
                <Image src={Logo2}  class=" cursor-pointer"/>    
            </div>
            
            <div className="flex px-4 items-center">
            </div>
            
        </div>
    )
}

export default Topbar
