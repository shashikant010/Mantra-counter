import React, { useEffect } from 'react'
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
   let like=false;
   useEffect(()=>{
    const handlelike=()=>{
      if(like===false){
        document.querySelector('.like').style.color='blue';
        like=true;
      }
      else{
        document.querySelector('.like').style.color='white';
        like=false;
      }
    }
    document.querySelector('.like').addEventListener('click',handlelike);
    return()=>{
      document.querySelector('.like').addEventListener('click',handlelike);
    }
   })
  return (
    <div className='Player'>
      <div className="bg" style={{backgroundImage:`url(${ganesh})`,height:'100vh',width:'100%'}}>
    
      </div>
      <div className="icon">
      <div className='like'><i class="fa-solid fa-thumbs-up"></i>     </div>
      <div className='comment'><i class="fa-solid fa-comment"></i>   </div>
      <div className='share'><i class="fa-solid fa-share"></i>   </div>
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
