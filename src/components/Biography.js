import React from "react";
import "../pages/Home.css"; // Add this import to link the styles

function Biography() {
  return (
      <div className="text-container">
        <h1 className="highlight">Hi</h1>
        <h2>I'm Yi Ken</h2>
        <p>
          I am a passionate learner in fields like <span className="highlight"> DATA SCIENCE</span>, 
          <span className="highlight"> MACHINE LEARNING</span> and <span className="highlight"> SOFTWARE ENGINEERING</span>. During my free time,
          I enjoy <span className="underline"> tackling challenging problems</span> and <span className="underline">discovering patterns</span> in real-world data. 
        </p>
        <p>
          In addition, I have deep interest in <span className="highlight">MATHEMATICAL TOPICS</span>, 
          with a particular focus on <span className="highlight">STATISTICS</span>. I am driven by the desire  
          to <span className="underline">understand the underlying principles</span> that shape these concepts. I find great satisfaction in <span className="underline">applying 
          statistical methods to analyse data</span> and <span className="underline">deriving meaningful insights</span> to solve complex real-world problems.
        </p>
        <p className="project-link"> 
          <a href="https://github.com/yiken0724/Data-analysis-on-Ford-Vehicles" target="_blank" rel="noopener noreferrer">
            Check out my latest project on GitHub
          </a>
        </p>
      </div>
  );
}

export default Biography;
