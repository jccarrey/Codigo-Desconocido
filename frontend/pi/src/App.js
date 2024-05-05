import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import SobreNosotros from './Components/SobreNosotros/SobreNosotros';
import ScapeRooms from './Components/ScapeRooms/ScapeRooms';
import Contact from './Components/Contact/Contact';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/scaperooms" element={<ScapeRooms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
