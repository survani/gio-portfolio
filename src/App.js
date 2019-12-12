import React from 'react';
import { Route } from 'react-router-dom';
import './sass/styles.scss';

import Navigation from './Components/Navigation';
import Home from './Components/Home.jsx';
// import Footer from './Components/Footer';
import Projects from './Components/Projects';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navigation/> 
      <Route exact path='/' component= {Home}/>
      <Route path='/projects' render={() => <Projects/>}/>
      <Route path='/about' render={() => <About/>}/>
      
    </div>
  );
}

export default App;
