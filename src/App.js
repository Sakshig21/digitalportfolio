import { useState } from 'react';
import './App.css'

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Contact from './components/Contact-form/Contact';
import Header from './components/Header/Header';


function App() {
  
 
  return (
    <div className="main-div  ">
   

   
      
    <Header/>
      <Hero/>
    <About/>
    <Education/>
    <Skills/>
    <Project/>
    <Contact/>

      
     
      
      
  
    
      
      
    </div>
    
  );
}

export default App;