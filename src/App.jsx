import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
    

  return (
    <div id='hello' className='text-red-600'>App</div>
  )
}

export default App