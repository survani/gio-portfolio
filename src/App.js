//Built-In Components ---
import React from 'react';
import { Route } from 'react-router-dom';
import './sass/_styles.scss';

//Custom Made Components---
import Navigation from './Components/Navigation';
import Home from './Components/Home.jsx';
// import Footer from './Components/Footer';
import ProjectsCard from './Components/ProjectsCard';
import About from './Components/About';
import ProjectContainer from './Components/ProjectContainer';

function App() {
  return (
    <div className="App">
      <Navigation/> 
      <Route exact path='/' component= {Home}/>
      <Route path='/projects' component={ProjectContainer}/>
      <Route path='/about' render={About}/>
      
    </div>
  );
}

export default App;
