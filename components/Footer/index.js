
import Link from 'next/link'

function Redes() {
  return (
    <div>
    {/*<!-- component --*/}
<div class=" bg-gray-900">
  <div class="max-w-2xl mx-auto text-white py-10">
      <div class="text-center">
          <h3 class="text-3xl mb-3"> NyldeCosmeticos  </h3>
          <p> Araguaína-To </p>
          </div>
      </div>

      <div class="mt-11 pb-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <a href="https://www.instagram.com/sr_all3x/"><p class="order-2 md:order-1 ml-4 mt-8 md:mt-0"> &copy; Feito por @sr_all3x, 2021. </p></a>
          <div class="order-1 md:order-2">
              <span class="px-2">Sobre</span>
              <a href="https://api.whatsapp.com/send?phone=5563992072188"><span class="px-2 border-l">Contato</span></a>
              
              <Link href="../../pages/Privacidade-e-termos">
              <span class="px-2 border-l">Políticas e Termos de Uso</span>

              </Link>
          </div>
      </div>
  </div>
</div>


  )
}
export default Redes;
