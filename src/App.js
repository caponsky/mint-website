import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import About from './pages/About';
import Mint from './pages/Mint';
import Team from './pages/Team';
import ErrorPage from './pages/errorpage';


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/about' element={<About />} />
          <Route path='/mint' element={<Mint />} />
          <Route path='/team' element={<Team />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
