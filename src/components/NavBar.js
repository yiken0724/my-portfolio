import React from "react";
import NavButton from "./NavButton";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <NavButton label="HOME" route="/" />
        <NavButton label="ABOUT ME" route="/about-me" />
        <NavButton label="PROJECTS" route="/projects" />
        <NavButton label="MODULE REVIEW" route="/module-review" />
        <NavButton label="CONTACT ME" route="/contact-me" />
      </div>
    </div>
  );
}

export default NavBar;