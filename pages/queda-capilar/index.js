import Topbar from '/components/Topbar'
import Hair from './newhair.jsx'
import Cta from './cta.jsx'
import Footer from '/components/Footer'
import Nugget from './nugget/index.js'
import Redes from '/components/Redes'

export default function Home() {
    return(
        <div>
           <Topbar/>
           <Nugget/>
           <Hair/>
           <Cta/>
           <Redes/>
        </div>
    )
}