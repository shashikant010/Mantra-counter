import React, { useEffect } from 'react'
import Lyrics from './Lyrics';
import pujathali from '../images/puja-thali.png'

export default function Player(props) {

   useEffect(()=>{
   
    let like=false;
    let play=true;
    const handleplay=()=>{
     if(play===true){
       console.log("audio is off")
       document.querySelector('.arti audio').pause(); 
       play=false;
       document.querySelector('.play').innerText='⏯';
     }
     else{
       console.log("audio is on")
       document.querySelector('.arti audio').play(); 
       play=true;
       document.querySelector('.play').innerText='⏸';
     }
    }
    
    const handlelike=()=>{
      console.log("like is clicked")
      if(like===false){
        document.querySelector('.like').style.color='blue';
        like=true;
      }
      else{
        document.querySelector('.like').style.color='white';
        like=false;
      }
    }
    document.querySelector('.play').addEventListener('click',handleplay);
    document.querySelector('.like').addEventListener('click',handlelike);
    return()=>{
      document.querySelector('.like').removeEventListener('click',handlelike);
    document.querySelector('.play').removeEventListener('click',handleplay);

    }
   })
  return (
    
    <div className="playerbox">
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
        <button className="play" >
        ⏸
        </button>
        <button className="forw">
        ⏭
        </button>
        
      </div>
      <div className="hide arti">

        <audio src={props.arti} autoPlay></audio>

      </div>
    </div>
    <div className="thali">
      <img src={pujathali} alt="thali" />
    </div>
    <div className="lyrics">
      <Lyrics/>
    </div>
    </div>
    
  )
}
