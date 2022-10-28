import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

import one from '../Components/Images/one.avif';
import two from '../Components/Images/two.avif';
import three from '../Components/Images/three.avif';
import four from '../Components/Images/four.avif';
import five from '../Components/Images/five.avif';
import six from '../Components/Images/six.avif';
import seven from '../Components/Images/seven.avif';
import eight from '../Components/Images/eight.avif';
import nine from '../Components/Images/nine.avif';
import ten from '../Components/Images/ten.avif';
import eleven from '../Components/Images/eleven.avif';
import twelve from '../Components/Images/twelve.avif';
import thirteen from '../Components/Images/thirteen.avif';
import fourteen from '../Components/Images/fourteen.avif';
import fiftheen from '../Components/Images/fiftheen.avif';
import sixteen from '../Components/Images/sixteen.avif';
import seventeen from '../Components/Images/seventeen.avif';


import './Gallery.css'

function Gallery() {
  return (
  <Box className='galleryBox'>
    <ImageList variant="masonry" 
               sx={{ paddingLeft:'13%', paddingRight:'13%', paddingTop:{xs:'75%', sm:'25%', md:'15%', lg:'10%'}, background:'black' }} 
               cols={2} gap={10}>

      {itemData.map((item) => (
        <ImageListItem key={item.img}>

          <img
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading='lazy'
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
    img: one,
  },
  {
    img: two,
  },
  {
    img: three,
  },
  {
    img: four,
  },
  {
    img: five,
  },
  {
    img: six,
  },
  {
    img: seven,
  },
  {
    img: eight,
  },
  {
    img: nine,
  },
  {
    img: ten,
  },
  {
    img: eleven,
  },
  {
    img: twelve,
  },
  {
    img: thirteen,
  },
  {
    img: fourteen,
  },
  {
    img: fiftheen,
  },
  {
    img: sixteen,
  },
  {
    img: seventeen,
  },
];

export default Gallery