import React, { useEffect } from 'react'
import ganesh from '../images/ganesh.png'

export default function Player(props) {
  let play=true;
  let like=false;
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
      <div className="bg" style={{backgroundImage:`url(${props.image})`,height:'100vh',width:'100%'}}>
    
      </div>
      <div className="icon">
      <div className='like'><i className="fa-solid fa-thumbs-up"></i>     </div>
      <div className='comment'><i className="fa-solid fa-comment"></i>   </div>
      <div className='share'><i className="fa-solid fa-share"></i>   </div>
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

        <audio src={props.arti} autoPlay></audio>

      </div>
    </div>
  )
}
