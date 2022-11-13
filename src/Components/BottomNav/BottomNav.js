import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

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

function BottomNav() {
  return (
    <Box className='BottomBox'>
        <Container className='BottomNavContainer'>

         <a href='https://www.youtube.com/channel/UCVZ2-fgGRXe6bI68XTwtJGA' target="_blank"> 
          <YouTubeIcon className='Icons' sx={{ color: '#FF0000', fontSize: 65 }} />
         </a>

         <a href='https://www.instagram.com/torrentialrainfilms/' target="_blank"> 
          <InstagramIcon className='Icons' sx={{ color: '#E1306C', fontSize: 65 }} />
         </a>

         <Mailto email="eththeepic@gmail.com" subject="Let's start a conversation" body="Hello Ethan!">
          <Typography variant='h4' className='BottomNavTypo'> eththeepic@gmail.com </Typography>
         </Mailto>

        </Container>
    </Box>
  )
}

export default BottomNav