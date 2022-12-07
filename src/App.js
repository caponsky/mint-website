import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import About from './pages/About';
import RoadMap from './pages/RoadMap';
import Team from './pages/Team';
import ErrorPage from './pages/errorpage';
import NavBar from './NavBar';



function App() {

  const [accounts, setAccounts] = useState([]);

  return (
      <div className='App'>
          <NavBar accounts={accounts} setAccounts={setAccounts}/>
        <div>
          <Routes>
            <Route path='/' element={<MainPage accounts={accounts} setAccounts={setAccounts}/>}/>
            <Route path='/about' element={<About />} />
            <Route path='/roadmap' element={<RoadMap />} />
            <Route path='/team' element={<Team />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
