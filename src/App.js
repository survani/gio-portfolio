//Built-In Components ---
import React from 'react';
import { Route } from 'react-router-dom';
import './sass/styles.scss';
import { useAuth0 } from "./react-auth0-spa";

//Custom Made Components---
import Navigation from './Components/Navigation';
import Home from './Components/Home.jsx';
// import Footer from './Components/Footer';
import Projects from './Components/Projects';
import About from './Components/About';
import Login from './Components/login'

function App() {
  //Autho Part of code
  // const { loading } = useAuth0();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="App">
      <Navigation/> 
      <Route exact path='/' component= {Home}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/about' render={About}/>
      <Route path='/login' render={Login}/>
      
    </div>
  );
}

export default App;
