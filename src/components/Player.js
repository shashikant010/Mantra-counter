import React from 'react'

export default function Player() {
   let img='https://c0.klipartz.com/pngpicture/314/305/gratis-png-senor-ganesha-shiva-ganesha-parvati-deidad-ganesh-thumbnail.png'
  return (
    <div className='Player'>
      <div className="bg" style={{backgroundImage:`url(${img})`,height:'100vh',width:'100%'}}>
    
      </div>
      <div className="icon">
      <div className='like'>👍</div>
      </div>
      <div className="playbar">
        <button className="backw">
        ⏮
        </button>
        <button className="play">
        ⏸
        </button>
        <button className="forw">
        ⏭
        </button>
        
      </div>
    </div>
  )
}
