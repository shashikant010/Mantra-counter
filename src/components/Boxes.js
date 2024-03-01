import React from 'react'
import arti from '../images/aarti.png'
import {Link} from 'react-router-dom'
export default function Boxes(props) {
  return (
    <Link to={`/${props.title}`}className='boxes'>
      
        <img src={arti} alt="" height={100}/>
<h2>{props.title}</h2>
      
    </Link>
  )
}
