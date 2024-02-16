import React from 'react'
import { Link } from 'react-router-dom'

export default function Aartibox(props) {
  return (
      <div className="arti-box">
        <Link to={props.link} >{props.title }   </Link>           
      </div>
   
  )
}
