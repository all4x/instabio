import * as React from 'react';
import { Fab, } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { brown } from '@mui/material/colors';
import { Box } from '@mui/material';



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
          <h1 className='font-light px-2 mx-2 text-xs p-3 bg-green-50 rounded-lg shadow-xl'>Posso te ajudar?</h1>

      <a href='https://api.whatsapp.com/send?phone=5563992072188'>
      <Fab className='bg-green-500' aria-label="edit" size='large'>
      <WhatsAppIcon sx={{ color: brown[50] }} fontSize='large' />
      </Fab>
      </a>
      </Box>

  )
};


export default App;