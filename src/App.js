// src/App.js
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import './App.css'; // Add your custom styles in App.css
import Home from './MyComponents/Home';
import Projects from './MyComponents/Projects'
import Navbar from './MyComponents/Navbar';
function App() {
  return (
<>

    <div className="App">
    
      {/* <Navbar></Navbar>
      <Body></Body> */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="*" element={null} />
      </Routes>
    </BrowserRouter>
    </div>

    </>
  );
}

export default App;
