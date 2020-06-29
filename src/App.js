import React from "react";
import HomePage from "./components/homepage/homepage";
import { Route } from "react-router-dom";
import About from "./components/about/about";
import Navigation from "./containers/navigation/Navigation";

//uncomment when using under construction
// import UnderConstruction from "./containers/underconstruction/UnderConstruction";

function App() {
  return (
    <>
      <Navigation />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
    </>
  );
}

export default App;
