import React from 'react'
import arti from '../aarti.png'

export default function Boxes(props) {
  return (
    <div>
      <div className='boxes'>
        <img src={arti} alt="" height={100}/>
 <h2>{props.title}</h2> 
      </div>
    </div>
  )
}
