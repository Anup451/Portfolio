import React from 'react';
import '../CSS/body.css';
import '../JS/Body';
import 'bootstrap-icons/icons/code-slash.svg'
function Body() {
  return (
    <>
        <h1></h1>
        <div className="containerr" style={{ marginTop: "20px" }}>
          <div>
            <span className="title" style={{ color: "white" }}>Hi, I am AJ</span>
          </div>
      </div>  
      <h3 className="container2" style={{ color: "white" }}><span id="typing-animation" style={{ color: "white" }} ></span></h3>

        <footer>
        <a href="https://codeforces.com/" class="footer-icons" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-code-slash">CodeForces</i>
        </a>
          <a href="https://www.linkedin.com/" class="footer-icons" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://leetcode.com/" class="footer-icons" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-code-slash">LeetCode</i>
          </a>
        </footer>


    </>
  )
}

export default Body