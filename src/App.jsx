import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';

import './App.css'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    Aos.init();
    
   }, [])
  return (
    <>
    <Navbar />
    <div className='container'>
      <Home /> 
      <Experience />
      <Skills />
      <Projects />
      <Contact />
     </div>

    </>
  )
}

export default App
