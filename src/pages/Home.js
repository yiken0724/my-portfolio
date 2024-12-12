import React from "react";
import "./Home.css"; // Add this import to link the styles
import Biography from "../components/Biography";
import HomePic from "../components/HomePic";

function Home() {
  return (
    <div className="home-container">
      <div className="section1">
        <HomePic/>
        <Biography/>
      </div>
    </div>
  );
}

export default Home;

