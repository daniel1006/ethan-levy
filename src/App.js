import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { Home, Gallery, Menu, RealEstate, NavBar } from './Components';

import './index.css';

function App() {
  return (

<Routes>
  <Route path='/' element={<> <NavBar/> <Home/> <Menu/> </>}/>
  <Route path="/gallery" element={<> <NavBar/> <Gallery/> </>} />
  <Route path="/realEstate" element={<> <NavBar/> <RealEstate/> </> } />
</Routes>

  );
}

export default App;
