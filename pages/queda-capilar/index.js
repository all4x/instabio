import Topbar from '/components/Topbar'
import Hair from './newhair.jsx'
import Cta from './cta.jsx'
import Footer from '/components/Footer'
import Nugget from './nugget/index.js'


export default function Home() {
    return(
        <div>
           <Topbar/>
           <Hair/>
           <Cta/>
           <Nugget/>
           <Footer/>
        </div>
    )
}