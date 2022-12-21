import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import { Helmet } from 'react-helmet-async';

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
import twelve from '../Components/RealEstate/twelve.avif';
import thirteen from '../Components/RealEstate/thirteen.avif';
import fourteen from '../Components/RealEstate/fourteen.avif';
import fifteen from '../Components/RealEstate/fifteen.avif';
import sixteen from '../Components/RealEstate/sixteen.avif';
import seventeen from '../Components/RealEstate/seventeen.avif';
import eighteen from '../Components/RealEstate/eighteen.avif';
import nineteen from '../Components/RealEstate/nineteen.avif';
import twenty from '../Components/RealEstate/twenty.avif';
import twentyone from '../Components/RealEstate/twentyone.avif';
import twentytwo from '../Components/RealEstate/twentytwo.avif';
import twentythree from '../Components/RealEstate/twentythree.avif';
import thwentyfour from '../Components/RealEstate/thwentyfour.avif';
import twentyfive from '../Components/RealEstate/twentyfive.avif';
import twentysix from '../Components/RealEstate/twentysix.avif';
import twentyseven from '../Components/RealEstate/twentyseven.avif';
import twentyeight from '../Components/RealEstate/twentyeight.avif';
import thwentynine from '../Components/RealEstate/thwentynine.avif';
import thirthy from '../Components/RealEstate/thirthy.avif';

import './RealEstate.css'

function RealEstate() {
  return (

<Box className='RealEstateBox'>

<Helmet>
  <title>Real Estate Page</title>
  <meta name='description' content='Personal photography portfolio for Real Estate' />
  <link rel='canonical' href="/realEstate" />
</Helmet>

    <ImageList variant="masonry" 
               sx={{ paddingLeft:'10%', paddingRight:'10%', paddingTop:{xs:'57%', sm:'25%', md:'15%', lg:'10%'}, background:'black' }} 
               cols={2} gap={25}>

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
    img: fifteen,
  },
  {
    img: sixteen,
  },
  {
    img: seventeen,
  },
  {
    img: eighteen,
  },
  {
    img: nineteen,
  },
  {
    img: twenty,
  },
  {
    img: twentyone,
  },
  {
    img: twentytwo,
  },
  {
    img: twentythree,
  },
  {
    img: thwentyfour,
  },
  {
    img: twentyfive,
  },
  {
    img: twentysix,
  },
  {
    img: twentyseven,
  },
  {
    img: twentyeight,
  },
  {
    img: thwentynine,
  },
  {
    img: thirthy,
  },
];

export default RealEstate
