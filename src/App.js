import React from 'react';
import { Route } from 'react-router-dom';
import './sass/styles.scss';

import Navigation from './Components/Navigation';
import Home from './Components/Home.jsx';
// import Footer from './Components/Footer';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Navigation/> 
      <Route exact path='/' component={Home}/>
      <Route path='/projects' component={Projects}/>
      
    </div>
  );
}

export default App;
