import * as React from 'react';
import Zap from '../../../public/whatsapp.png'
import { Fab, } from '@mui/material';
import Image from 'next/image'



// Button of ZapZap
function App() {
  return (
    <div className=''>
      <a href='https://api.whatsapp.com/send?phone=5563992072188'>
      <Fab disabled aria-label="like" size='small'>
      <Image src={Zap}/>
      </Fab>
      </a>
      
    </div>
    
  )
};


export default App;