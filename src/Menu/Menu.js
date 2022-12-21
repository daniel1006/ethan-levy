import React from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Menu.css';

const theme = createTheme();
theme.typography.h1 = {
  fontSize: '3.5rem',
  fontFamily: 'Arial, Helvetica, sansSerif',
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
    <ThemeProvider theme={theme}>
          <Typography variant='h1' display="inline">Th</Typography> 
          <Typography variant='h1' display="inline" className='delay1'>e</Typography> 
          <Typography variant='h1' display="inline" className='delay2'> BIG </Typography>
          <Typography variant='h1' display="inline">M</Typography>
          <Typography variant='h1' display="inline" className='delay3'>en</Typography>
          <Typography variant='h1' display="inline">u</Typography>
    </ThemeProvider>
      </div>

      <Container sx={{ width: {xs: '90%', sm:'40%', lg:'30%'} }} className='menuList'>
          <Typography variant='h4' className='listItem'><Link to='/gallery' className='listLink'> Photo Gallery </Link></Typography>
          <div className='menuSeperater'></div>
          <Typography variant='h4' className='listItem'><Link to='/realEstate' className='listLink'> Real Estate </Link></Typography>
          <div className='menuSeperater'></div>
          <Typography variant='h4' className='listItem'><Link to='/progress' className='listLink'> Films </Link></Typography>
      </Container>

    </Box>
  )
}

export default Menu