import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { Home, Gallery, Menu, RealEstate, NavBar, BottomNav, Videography, BabyDoll, Progress } from './Components';

import './index.css';

function App() {
  return (

<Routes>
  <Route path='/' element={<> <NavBar/> <Home/> <Menu/> <BottomNav/> </>}/>
  <Route path="/gallery" element={<> <NavBar/> <Gallery/> <BottomNav/> </>} />
  <Route path="/realEstate" element={<> <NavBar/> <RealEstate/> <BottomNav/> </> } />
  <Route path="/videography" element={<> <NavBar/> <Videography/> <BottomNav/> </> } />

  <Route path='babyDoll' element={ <BabyDoll/> }/>
  <Route path='progress' element={<> <NavBar/> <Progress/> </>}/>
</Routes>

  );
}

export default App;
