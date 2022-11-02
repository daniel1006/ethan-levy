import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

import one from '../Components/RealEstate/one.avif';
import two from '../Components/RealEstate/two.avif';
import three from '../Components/RealEstate/three.avif';
import four from '../Components/RealEstate/four.avif';
import five from '../Components/RealEstate/five.avif';
import six from '../Components/RealEstate/six.avif';
import seven from '../Components/RealEstate/seven.avif';
import eight from '../Components/RealEstate/eight.avif';
import nine from '../Components/RealEstate/nine.avif';
import ten from '../Components/RealEstate/ten.avif';
import eleven from '../Components/RealEstate/eleven.avif';

import './RealEstate.css'

function RealEstate() {
  return (

  <Box className='RealEstateBox'>
    <ImageList variant="masonry" 
               sx={{ paddingLeft:'20%', paddingRight:'20%', paddingTop:{xs:'75%', sm:'25%', md:'15%', lg:'10%'}, background:'black' }} 
               cols={1} gap={10}>

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
];

export default RealEstate
