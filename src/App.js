import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navigation from './Components/Navigation';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navigation/> 
      <Route exact path='/' component={Home}/>
      
    </div>
  );
}

export default App;
