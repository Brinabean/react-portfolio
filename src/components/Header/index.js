import React, { useState } from "react";
import Nav from "../Nav";

function Header() {
  return (
    <header className="flex-row px-1">
      <h1>
        <a data-testid="link" href="/">
          Sabrina
        </a>
      </h1>
      <Nav></Nav>
    </header>
  );
}

export default Header;
