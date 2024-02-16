import React from 'react'
import ganesharti from '../music/ganeshArti.mp3'

export default function Player() {
   let img='https://c0.klipartz.com/pngpicture/314/305/gratis-png-senor-ganesha-shiva-ganesha-parvati-deidad-ganesh-thumbnail.png'
  let play=true;
   const handleplay=()=>{
    if(play===true){
      document.querySelector('audio').pause(); 
      play=false;
      document.querySelector('.play').innerText='⏯';
    }
    else{
      document.querySelector('audio').play(); 
      play=true;
      document.querySelector('.play').innerText='⏸';
    }
   }
  return (
    <div className='Player'>
      <div className="bg" style={{backgroundImage:`url(${img})`,height:'100vh',width:'100%'}}>
    
      </div>
      <div className="icon">
      <div className='like'><i class="fa-solid fa-thumbs-up"></i>     </div>
      </div>
      <div className="playbar">
        <button className="backw">
        ⏮
        </button>
        <button className="play" onClick={handleplay}>
        ⏸
        </button>
        <button className="forw">
        ⏭
        </button>
        
      </div>
      <div className="hide">

        <audio src={ganesharti} autoPlay></audio>

      </div>
    </div>
  )
}
