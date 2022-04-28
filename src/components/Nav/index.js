import React from "react";

function Nav() {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#about-me">About Me</a>
        </li>
        <li className="mx-2">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="mx-2">
          <a href="#contact-me">Contact Me</a>
        </li>
        <li className="mx-2">
          <a href="#my-resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
