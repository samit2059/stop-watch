// import './App.css';
// import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Time from './component/time.js';
import Counter from './component/counter.js';
import Navbar from './component/Navbar.js';
import Like from './component/like.js';
// import { useEffect } from 'react';
import TaskTimer from './component/taskTimer.jsx';
function App() {
    
  return (
<TaskTimer />
    // <Router>
    //   <Navbar />
    //   <div className="container">
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
