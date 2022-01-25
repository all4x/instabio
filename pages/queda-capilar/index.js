import Topbar from '/components/Topbar'
import Hair from './newhair.jsx'
import Cta from './cta.js'

import Nugget from './nugget/index.js'
import Redes from '/components/Redes'
import About from './about/index.js'



export default function Home() {
    return(
        <div className=''>
           <Topbar/>
           <div className='bg-gray-50 xl:mx-28 xl:px-24'>
                <Nugget/>
                <Hair/>
                <Cta/>
                <About/>
                
                
                
           </div>
           <Redes/>
        </div>
    )
}