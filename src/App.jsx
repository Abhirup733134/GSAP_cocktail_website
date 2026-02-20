import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';
import About from './About.jsx';


gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
    

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
    </main>
  )
}

export default App