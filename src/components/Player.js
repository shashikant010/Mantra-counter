import React from 'react'
import ganesharti from '../music/ganeshArti.mp3'
import ganesh from '../images/ganesh.png'

export default function Player() {
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
      <div className="bg" style={{backgroundImage:`url(${ganesh})`,height:'100vh',width:'100%'}}>
    
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
