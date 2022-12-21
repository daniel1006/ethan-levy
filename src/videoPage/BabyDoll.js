import React from 'react';
import { Container, Box } from '@mui/system';

import './videoPages.css'

const BabyDoll = () => {
  return (
    <Box className='videoPages'>
     <Container>

      <iframe 
        className='iframe' 
        src="https://www.youtube.com/embed/WyKPYahtPVU" 
        title="Baby Doll" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen">
      </iframe>

     </Container>
    </Box>
  )
}

export default BabyDoll