import Image from 'next/image'
import Logo2 from '/public/logo2.png'



function Topbar() {
    return (
        <div className="pb-5 xl:flex xl:py-2 sm:px-3 md:flex  justify-between bg-white p-2 rounded-b-xl border-gray-300 shadow-lg">
            <div className="flex justify-between  ">
                <Image src={Logo2}  class=" cursor-pointer"/>    
            </div>
            
            <div className="flex px-4 items-center">
                    <p className="text-center xl:text-2xl sm:text-base font-medium text-gray-900  ">A beleza e saúde do seu cabelo falam muito sobre você</p>     
            </div>
            
        </div>
    )
}

export default Topbar
