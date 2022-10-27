import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

import './Gallery.css'

function Gallery() {
  return (
  <Box className='galleryBox'>
    <ImageList variant="woven" sx={{ paddingLeft:'13%', paddingRight:'13%', paddingTop:'5%', background:'black' }} cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>

          <img
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
          />

        <ImageListItem/> 

        </ImageListItem>
      ))}
    </ImageList>
  </Box>
  )
}

const itemData = [
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
];

export default Gallery