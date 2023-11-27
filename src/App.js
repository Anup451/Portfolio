// src/App.js
import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css'; // Add your custom styles in App.css
import  Navbar from './MyComponents/Navbar';
import Body from './MyComponents/Body';
function App() {
  return (
<>

    <div className="App">
    
      <Navbar></Navbar>
      <Body></Body>
    </div>

    </>
  );
}

export default App;
