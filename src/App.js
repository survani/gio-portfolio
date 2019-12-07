import React from 'react';
<<<<<<< HEAD
import { Route } from 'react-router-dom';
import './sass/styles.scss';
import Navigation from './Components/Navigation';
import Home from './Components/Home.jsx';
=======
import './App.css';
import { Route } from 'react-router-dom';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
>>>>>>> 12315f28f9c375632ac728fd158a94cf00a6d433

function App() {
  return (
    <div className="App">
      <Navigation/> 
      <Route exact path='/' component={Home}/>
      
    </div>
  );
}

export default App;
