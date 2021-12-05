
import Image from 'next/image'
import Logo from '/public/logo1.png'



function Topbar() {
    return (
        <div className="flex justify-between p-5  ">
            <div className="flex justify-between bg-gradient-to-t w-screen">
                <Image src={Logo} height={100} width={90}/>    
            </div>
            
            <div className="">
                <div className="text-2xl font-bold text-gray-700">
                    <h1>NyldeCosmeticos</h1>
                </div>
                    <p className="text-center text-base font-sans text-gray-500 xl:text-left ">A beleza e saúde do seu cabelo falam muito sobre você</p>     
            </div>
            
        </div>
    )
}

export default Topbar

