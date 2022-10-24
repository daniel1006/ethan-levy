import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './Menu.css';

const theme = createTheme();
theme.typography.h1 = {
  fontSize: '3.5rem',
  '@media (min-width:600px)': {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5.5rem',
  },
};

function Menu() {
  return (
    <Box className='menuBox'>

      <div className='menuHeader'>
        <Typography variant='h1' display="inline">Th</Typography> 
        <Typography variant='h1' display="inline" className='delay1'>e</Typography> 
        <Typography variant='h1' display="inline" className='delay2'> BIG </Typography>
        <Typography variant='h1' display="inline">M</Typography>
        <Typography variant='h1' display="inline" className='delay3'>en</Typography>
        <Typography variant='h1' display="inline">u</Typography>
      </div>

      <Box sx={{ width: '100px' }}>
      <Paper elevation={24} />
    </Box>

    </Box>
  )
}

export default Menu