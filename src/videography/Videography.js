import React from 'react';
import { Link } from 'react-router-dom';
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import ten from '../Components/Images/ten.avif';

import './videography.css'

const theme = createTheme();

theme.typography.h4 = {
  paddingTop: '2.2%',
  fontSize: '2rem',
  '@media (min-width:500px)': {
    fontSize: '2.2rem',
     paddingTop: '2.4%',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.3rem',
  },
};

function Videography() {
  return (

  <Box className='videoBox'
        sx={{ paddingTop:{xs:'70%', sm:'25%', lg:'27%', lg:'12%'} }}>
      <Grid2 container   justifyContent="center" alignItems="center" spacing={5}>

        <Grid2 sm={12} lg={5} elevation={3}>
          <Link to='/babyDoll'>
            <div className='imageBox'>
              <PlayArrowIcon className='playerIcon bounce' sx={{ fontSize: 100 }} />
              <img src={ten} alt="Coat Sonata" className='images grayScale' />
            </div>

            <ThemeProvider theme={theme}>
                <Typography variant='h4' className='videoInfo'>Oh Baby Doll</Typography>
            </ThemeProvider>
          </Link>
        </Grid2>

        <Grid2 sm={12} lg={5}>
          <img src={ten} alt="Coat Sonata" className='images'/>
          <ThemeProvider theme={theme}>
            <Typography variant='h4' className='videoInfo'>Oh Baby Doll</Typography>
          </ThemeProvider>
        </Grid2>

        <Grid2 sm={12} lg={5}>
          <img src={ten} alt="Backyard Trenches" className='images'/>
          <ThemeProvider theme={theme}>
            <Typography variant='h4' className='videoInfo'>Oh Baby Doll</Typography>
          </ThemeProvider>
        </Grid2>

        <Grid2 sm={12} lg={5}>
          <img src={ten} alt="Sweather Weather" className='images'/>
          <ThemeProvider theme={theme}>
            <Typography variant='h4' className='videoInfo'>Oh Baby Doll</Typography>
          </ThemeProvider>
        </Grid2>

        <Grid2 sm={12} lg={5}>
          <img src={ten} alt="Minor Adjustments" className='images'/>
          <ThemeProvider theme={theme}>
            <Typography variant='h4' className='videoInfo'>Oh Baby Doll</Typography>
          </ThemeProvider>
        </Grid2>

        <Grid2 sm={12} lg={5}>
          <img src={ten} alt="Couch Surfer" className='images'/>
          <ThemeProvider theme={theme}>
            <Typography variant='h4' className='videoInfo'>Oh Baby Doll</Typography>
          </ThemeProvider>
        </Grid2>

        <Grid2 sm={12} lg={5}>
          <img src={ten} alt="Days like This" className='images'/>
          <ThemeProvider theme={theme}>
            <Typography variant='h4' className='videoInfo'>Oh Baby Doll</Typography>
          </ThemeProvider>
        </Grid2>

        <Grid2 sm={12} lg={5}>
          <img src={ten} alt="How Should I Forget" className='images'/>
          <ThemeProvider theme={theme}>
            <Typography variant='h4' className='videoInfo'>Oh Baby Doll</Typography>
          </ThemeProvider>
        </Grid2>

        <Grid2 sm={12} lg={5}>
          <img src={ten} alt="There's Nothingc You Can Do" className='images'/>
          <ThemeProvider theme={theme}>
            <Typography variant='h4' className='videoInfo'>Oh Baby Doll</Typography>
          </ThemeProvider>
        </Grid2>

      </Grid2>
  </Box>
  )
}

export default Videography