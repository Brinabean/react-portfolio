import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import React, { useState } from "react";
import PageSelection from "./components/PageSelection";

function App() {
  const [selections] = useState([
    { name: "about" },
    { name: "projects" },
    { name: "contact" },
    { name: "resume" },
  ]);
  const [currentSelection, setCurrentSelection] = useState(selections[0]);

  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
