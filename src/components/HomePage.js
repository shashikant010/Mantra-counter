import React, { useState } from 'react'
import favicon from '../favicon.ico'
import Boxes from './Boxes.js'  
import { Cursor,useTypewriter,Typewriter } from 'react-simple-typewriter'        
export default function HomePage() {
  const s=" ";
  return (
    <div>
      <h1><img src={favicon} alt="img" height='30px' />&nbsp;SKY-ASTHA &nbsp;<img src={favicon} alt="img" height='30px' /> </h1>
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
