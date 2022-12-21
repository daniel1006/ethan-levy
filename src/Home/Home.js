import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import '../Components/NavBar/NavBar';
import './Home.css';

const theme = createTheme();

theme.typography.h2 = {
  fontSize: '1.8rem',
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

function Home() {
  return (
    
    <Box className='Box'  sx={{ flexGrow: 1 }}>

        <video autoPlay loop muted 
                style={{
                position: "absolute",
                width: "100vw",
                left: "0",
                top: "0",
                height: "100vh",
                objectFit: "cover",
                zIndex: "-3" }}>

          <source src={"https://dl.dropboxusercontent.com/s/nkajtezocg80u5a/RainVideo.mp4?dl=0"} type="video/mp4" />
        </video>   



        <Grid className="gridContainer" container rowSpacing={1} sx={{  paddingTop: theme.spacing(55),
                                                                        [theme.breakpoints.down('sm')]: {
                                                                        paddingTop: theme.spacing(35),
                                                                        },}}>

          <Grid xs={12} xsOffset={1} >
            <ThemeProvider theme={theme}>
              <Typography variant="h1" className="homeName" > Ethan Levy </Typography>
            </ThemeProvider>
          </Grid> 

          <Grid xs={12} sm={7} xsOffset={1} >
            <ThemeProvider theme={theme}>
              <Typography variant="h2" className="homeTitles" > Photographer | Filmmaker </Typography>
            </ThemeProvider>
          </Grid>

        </Grid>
    </Box>
    )
}

export default Home


