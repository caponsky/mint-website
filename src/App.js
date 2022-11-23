import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import About from './pages/About';
import RoadMap from './pages/RoadMap';
import Team from './pages/Team';
import ErrorPage from './pages/errorpage';



function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/about' element={<About />} />
          <Route path='/mint' element={<RoadMap />} />
          <Route path='/team' element={<Team />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
  );
}

export default App;
