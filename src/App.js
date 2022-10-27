import React from 'react';
import Navbar from './components/Navbar';
import Navigator from './components/Navigator';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Addhabit from './components/Addhabit';

export default function App(){

  return(
    <div>
      <Navbar /> 
      <Navigator />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/calander" exact element={<h2>calander</h2>} />
          <Route path="/add" exact element={<Addhabit />} />
        </Routes>
    </div>
  )
} 