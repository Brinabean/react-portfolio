import React, { useEffect } from "react";
import { capitalize } from "../../utils/helpers";

function Nav(props) {
  const { selections = [], setCurrentSelection, currentSelection } = props;

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a
            data-testid="about"
            href="#about"
            onClick={() => currentSelection === "about"}
            className={"navActive"}
          >
            About me
          </a>
        </li>
        <li className="mx-2">
          <a
            data-testid="projects"
            href="#projects"
            onClick={() => currentSelection === "projects"}
            className={"navActive"}
          >
            Projects
          </a>
        </li>
        <li className="mx-2">
          <a
            data-testid="contact"
            href="#contact"
            onClick={() => currentSelection === "contact"}
            className={"navActive"}
          >
            Contact
          </a>
        </li>
        <li className="mx-2">
          <a
            data-testid="contact"
            href="#resume"
            onClick={() => currentSelection === "resume"}
            className={"navActive"}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
