import React from 'react'
import Boxes from './Boxes.js'  
import { Cursor,Typewriter } from 'react-simple-typewriter'        
export default function HomePage() {
  return (
    <div>
      
    <h3><span><Typewriter
                  loop
                  cursor
                  // cursorColor='red'
                  cursorStyle="♥"
                  typeSpeed={60}
                  deleteSpeed={30}
                  delaySpeed={1000}
                  words={['All You Need','','for your pooja','','Is Here']}
                /></span><span ><Cursor/></span></h3>
    <div className="container">
    <Boxes title='Mantra'/>
    <Boxes title='Aarti'/>
    <Boxes title='Chalisa'/>
    </div>

    </div>
  )
}
