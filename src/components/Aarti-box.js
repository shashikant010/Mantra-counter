import React from 'react'
import { Link } from 'react-router-dom'

export default function Aartibox(props) {
  return (
    <Link to={props.link} >
      <div className="arti-box">
        {props.title }              
      </div>
      </Link>
   
  )
}
