import Topbar from '/components/Topbar'
import Hair from './newhair.jsx'
import Cta from './cta.js'

import Nugget from './nugget/index.js'
import Redes from '/components/Redes'


export default function Home() {
    return(
        <div>
           <Topbar/>
           <div className='bg-gray-50 xl:mx-28 xl:px-24'>
                <Nugget/>
                <Hair/>
                <Cta/>
                
           </div>
           <Redes/>
        </div>
    )
}