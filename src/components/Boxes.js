import React from 'react'
import arti from '../aarti.png'
import {Link} from 'react-router-dom'
export default function Boxes(props) {
  return (
    <div>
      <div className='boxes'>
        <img src={arti} alt="" height={100}/>
<Link to={`/${props.title}`}><h2>{props.title}</h2></Link>
      </div>
    </div>
  )
}
