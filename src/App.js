//import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { Home, Gallery, Menu } from './Components';
import Box from '@mui/material/Box';

import './index.css';

function App() {
  return (
  <Box className='appBox'>
      <Home  /> 
      <Menu  />
  </Box>
  );
}

export default App;
