import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Edu from './components/edu/Edu'

function App() {

  const [currentState, setState] = useState("home");

  function navbarState(newState){
    setState(newState);
  }

  return (
    <div className="App">
      <Navbar onFunction={navbarState}></Navbar>
      {currentState==="home" && <Home></Home>}
      {currentState==="bio" && <p>BIO</p>}
      {currentState==="education" && <Edu></Edu>}
      {currentState==="projects" && <p>PROJECTS</p>}
      {currentState==="professional" && <p>PROFESSIONAL</p>}
  </div>
  );
}

export default App;
