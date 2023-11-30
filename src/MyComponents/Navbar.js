import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/navbar.css'
import '../JS/Navbar';
import Projects from './Projects';
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className="container" style={{overflow:"hidden"}} >
<nav className="navbar navbar-expand-lg " style={{padding:"0px 10px"}}>
      {/* <a className="navbar-brand" style={{color:"white"}} href="#">SetBitCoder</a> */}
      <Link className="navbar-brand" style={{color:"white"}} to="/">SetBitCoder</Link>
      <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" style={{ color: 'white' }}  ></span>
      </button>
      <div className="collapse navbar-collapse mr-auto" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" to="/Projects">Projects</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    {/* <Outlet/> */}
    </>
  );
}

export default Navbar;
