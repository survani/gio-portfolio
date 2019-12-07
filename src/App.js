import React from 'react';
import { Route } from 'react-router-dom';
import './sass/styles.scss';
import Navigation from './Components/Navigation';
import Home from './Components/Home.jsx';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navigation/> 
      <Route exact path='/' component={Home}/>
      <Footer/>
      
    </div>
  );
}

export default App;
