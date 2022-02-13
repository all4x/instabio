import * as React from 'react';
import { Fab, } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {  brown, green, } from '@mui/material/colors';
import { Box } from '@mui/material';

const root = {
  primary : green
}

const icon = {
  sx : brown
}

// Button of ZapZap
function App() {
  return (
      <Box className='flex justify-center items-center '
      component="span"
      sx={{ p:2 }}
      position={ 'fixed'}
      bottom={30}
      right={5}
      zIndex={100}
      >
          <h1 className='font-extrabold text-white px-2 mx-2 text-xs p-3 bg-green-900 rounded-br-xl'>Como posso te ajudar?</h1>

      <a href='https://api.whatsapp.com/send?phone=5563992072188'>
      <Fab color="success" aria-label="edit" size='large'>
      <WhatsAppIcon sx={{ color: brown[50] }} fontSize='large' />
      </Fab>
      </a>
      </Box>

  )
};


export default App;