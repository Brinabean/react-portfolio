import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
//import PageSelection from "./components/PageSelection";

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
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
