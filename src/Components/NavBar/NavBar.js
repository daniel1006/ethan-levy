import React from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import HideOnScroll from './HideOnScroll';

import './NavBar.css'

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

function NavBar() {
  return (
<>
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar>
            <ThemeProvider theme={theme}>
               <Typography variant='h1' className="navTitle"><Link to='/' className='navLink'> Torrential Rain Films </Link></Typography>
            </ThemeProvider>
        </Toolbar>
      </AppBar>
</>
  )
}

export default NavBar