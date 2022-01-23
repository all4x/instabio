


import React from 'react';


function cta() {
  return <div>

      <h1 className=' text-center text-2xl font-black animate-pulse p-4'>Peça o seu! direto no Whatsapp👇</h1>
      {/*whatsapp*/}
      <div className=" text-4xl bg-opacity-25  text-black rounded-full p-2">
        
                <div  className="text-center">
                  <a href="/queda-capilar/whatsapp/button-1" onClick= {
                    function gtag_report_conversion(url) {
                      var callback = function () {
                        if (typeof(url) != 'undefined') {
                          window.location = url;
                        }
                      };
                      gtag('event', 'conversion', {
                          'send_to': 'AW-447631009/X5S5CLvg9pIDEKGdudUB',
                          'value': 1.0,
                          'currency': 'BRL',
                          'event_callback': callback
                      });
                      return false;
                    }
                  }>
                  
                  <button class="p-2 pl-16 pr-16 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Whatsapp</button>
                  </a>
                  
            </div>
                </div>

                <p className='text-center text-gray-600  mx-6'>frete gratis para toda Araguaína em até 1 dia útil</p>
  </div>;
}

export default cta;
