import * as React from 'react';
import { Fab, } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {  brown, green, } from '@mui/material/colors';
import { Box } from '@mui/material';

import Link from 'next/link'

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

      <Link href="/whatsapp">
      <Fab color="success" aria-label="edit" size='large'>
      <WhatsAppIcon sx={{ color: brown[50] }} fontSize='large' />
      </Fab>
      </Link>
      </Box>

  )
};


export default App;