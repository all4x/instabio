import Image from 'next/image'
import Logo2 from '/public/logo2.png'



function Topbar() {
    return (
        <div className=" xl:flex xl:py-2 sm:px-3 md:flex  justify-between bg-white p-2 rounded-b-sm border-gray-300 shadow-md">
            <div className="flex justify-between  ">
                <Image src={Logo2}  class=" cursor-pointer"/>    
            </div>
            
            <div className="flex px-4 items-center">
                    <p className="text-center xl:text-2xl sm:text-base font-serif text-gray-500  ">A beleza e saúde do seu cabelo falam muito sobre você</p>     
            </div>
            
        </div>
    )
}

export default Topbar
