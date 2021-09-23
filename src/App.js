import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Edu from './components/edu/Edu';
import Prof from './components/prof/Prof';
import Bio from './components/bio/Bio';
import Projects from './components/projects/Projects';

function App() {

  const [currentState, setState] = useState("home");

  function navbarState(newState){
    setState(newState);
  }

  return (
    <div>
      <div className="app-body">
      <Navbar onFunction={navbarState}></Navbar>
      {currentState==="home" && <Home></Home>}
      {currentState==="bio" && <Bio></Bio>}
      {currentState==="education" && <Edu></Edu>}
      {currentState==="projects" && <Projects></Projects>}
      {currentState==="professional" && <Prof></Prof>}
      </div>
      <footer>
          <p>Designed and created by Jorge Mateo Jara Fabian. Powered by AWS.</p>
      </footer>
    </div>
    
  );
}

export default App;
