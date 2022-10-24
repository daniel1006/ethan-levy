import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

function Gallery() {
  return (
  <Box>
    <ImageList variant="woven" sx={{ paddingLeft:'13%', paddingRight:'13%', paddingTop:'5%', background:'black' }} cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
  )
}

const itemData = [
  {
    img: 'https://dl.dropboxusercontent.com/s/wv37fxi9le35kf0/IMG_0130.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/ngvu8ywqmdu7rhd/IMG_0149.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/yut94rs3zaaz3b2/IMG_0269.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/ba0j83vzjckf0po/IMG_0280.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/bwkvjwuxlbuh5sf/IMG_0368.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/vwk4d83pj3an5ns/IMG_0376.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/l5ad3xn0uuh0nu6/IMG_0447.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/f85u2aa07e65d2f/IMG_1164.jpg?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/67paudma8zvnaa8/IMG_1287.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/96jtuptdk5yfgk6/IMG_1292.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/oybstf2m6yoii9v/IMG_1327.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/3qak05ri90oloa0/IMG_1455.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/6f8f9fi88i0tsyo/IMG_1540.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/kqrqd92jto2g5vm/IMG_1654.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/oehinptmwxvbivs/IMG_1821.png?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/mtjigh937tzx4hj/IMG_2188.jpg?dl=0',
  },
  {
    img: 'https://dl.dropboxusercontent.com/s/w0zu480t5uc36s6/IMG_2482.jpg?dl=0',
  },
];

export default Gallery