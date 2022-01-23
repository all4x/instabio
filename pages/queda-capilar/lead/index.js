
import Script from 'next/script';
import React from 'react';

function Lead() {
  return (
         <Script>
                {
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
                }
        </Script>
  )
}

export default Lead;
