import React  from 'react'
import favicon from '../favicon.ico'
import shankh from '../images/shankh.png'
import shankhsound from '../music/shankh.mp3'

export default function Navbar() {
  const handleshankhclick=()=>{
    document.getElementById('shankh').play();
  }


  return (
    <div className='Navbar'>
     <h1><img src={favicon} alt="img" height='30px' />&nbsp;SKY-ASTHA &nbsp;<img src={favicon} alt="img" height='30px' /> </h1>
     <div className="shankh" onClick={handleshankhclick}>
      <img src={shankh} alt="" />
     </div>
     <audio src={shankhsound} id='shankh'></audio>
    </div>


  )
}
