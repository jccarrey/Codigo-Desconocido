import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import SobreNosotros from './Components/SobreNosotros/SobreNosotros';
import ScapeRooms from './Components/ScapeRooms/ScapeRooms';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Login2 from './Components/Login/Login2';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/scaperooms" element={<ScapeRooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login2" element={<Login2/>} />
      </Routes>
    </Router>
  );
}

export default App;
