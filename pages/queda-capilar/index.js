import Topbar from '/components/Topbar'
import Hair from './newhair.jsx'
import Cta from './cta.jsx'
import Footer from '/components/Footer'


export default function Home() {
    return(
        <div>
           <Topbar/>
            <Hair/>
           <Cta/>
           <Footer/>
        </div>
    )
}