import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

import './BottomNav.css';
import { Typography } from '@mui/material';

// opening email app from link
// mailto is a Uniform Resource Identifier scheme for email addresses. It is used to produce hyperlinks on websites that allow users to send an email to a specific address directly from an HTML document,
const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

const themes = createTheme();
themes.typography.h4 = {
  marginRight: '2%',
  fontSize: '0.95rem',
  fontFamily: 'Arial, Helvetica, sansSerif',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [themes.breakpoints.up('md')]: {
    fontSize: '1.7rem',
  },
};

function BottomNav() {
  return (
    <Box className='BottomBox'>
        <Container className='BottomNavContainer'>

         <a href='https://www.youtube.com/channel/UCVZ2-fgGRXe6bI68XTwtJGA' target="_blank"> 
          <YouTubeIcon className='Icons' sx={{ color: '#FF0000', fontSize: "375%" }} />
         </a>

         <a href='https://www.instagram.com/torrentialrainfilms/' target="_blank"> 
          <InstagramIcon className='Icons' sx={{ color: '#E1306C', fontSize: "375%" }} />
         </a>

         <Mailto className='emailLink' email="torrentialrainfilms@gmail.com" subject="Let's start a conversation" body="Hello Ethan!">
            <ThemeProvider theme={themes}>
              <div/>  
              <Typography variant='h4' display="inline" className='BottomNavTypoLeft'>Send me a message at</Typography>
              <SendIcon className='sendIcon' sx={{ color: '#0ff', fontSize: "250%", position: "relative", top: 10  }}/>  
              <Typography variant='h4' className='BottomNavTypo'>torrentialrainfilms@gmail.com </Typography>
            </ThemeProvider>
         </Mailto>

        </Container>
    </Box>
  )
}

export default BottomNav