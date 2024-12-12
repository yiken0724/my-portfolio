import React from "react";
import "./BottomBar.css";

function BottomBar() {
  return (
    <div className="bottombarContainer">
      <div className="bottombar">
        <div className="left">
          <p>Created by Yi Ken</p>
          <p>&#169; 2024</p>
        </div>

        <div className="right">
          <a href="https://github.com/yiken0724" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="Github" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/choo-yi-ken" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/yiken_0724" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
