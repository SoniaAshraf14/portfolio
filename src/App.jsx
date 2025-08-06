import React from 'react'
import Header from './component/Header';
import Hero from './component/Hero';

import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';

const App= () => {
  return (
     <div className="font-sans text-slate-800">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App; 

