//Built-In Components ---
import React from "react";
import { Route } from "react-router-dom";
import "./sass/_styles.scss";

//Custom Made Components---
import Navigation from "./Components/Navigation";
import Home from "./Components/Home.jsx";
// import Footer from './Components/Footer';
import About from "./Components/About";
import ProjectContainer from "./Components/ProjectContainer";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={ProjectContainer} />
      <Route path="/about" render={About} />
      <Route path="/contact" render={Contact} />
    </div>
  );
}

export default App;
