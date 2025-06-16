// import './App.css';
// import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Time from './component/time.js';
import Counter from './component/counter.js';
import Navbar from './component/Navbar.js';
import Like from './component/like.js';
import Pallet_gen from './component/pallet-gen.js';
// import { useEffect } from 'react';
// import TaskTimer from './component/taskTimer.jsx';
import Color_picker from './component/color-picker.js';
function App() {
    
  return (
// <TaskTimer /> 
//<Color_picker />
<Pallet_gen />
    // <Router>
    //   <Navbar />
    //   <div className="container" >
    //     <Routes>
    //       <Route path="/Like" element={<Like />} />
    //       <Route path="/" element={<Time />} />
    //       <Route path="/Counter" element={<Counter />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}
export default App;
