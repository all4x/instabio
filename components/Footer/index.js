import Link from "next/link"



function Footer() {
    return (
        <div className="flex justify-center font-sans text-gray-500 space-x-1 text-base">
        <Link href="/Privacidade-e-termos"><a>Política de Privacidade e Termos de Uso </a></Link>
        
        </div>
    )
}

export default Footer
