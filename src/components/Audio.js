import React from 'react';
import gm from '../gm.mp3';
import { useEffect } from 'react';

export default function Audio() {

    useEffect(()=>{
        let isPlaying=false;
        const handleplay=(e)=>{
            if(e.key==="p"){
                console.log('p is pressed')
                if(!isPlaying){
                document.querySelector('audio').play();
            isPlaying=true;
            }
                else{
                    document.querySelector('audio').pause(); 
                    isPlaying=false;
                }
              }
            
        }
        document.addEventListener('keydown',handleplay);
        return()=>{
          document.removeEventListener('keydown',handleplay);
        }
    })
  return (
    <div>
            <div className="aud">
      <audio controls loop>
  <source src={gm} type="audio/mpeg"/>
Your browser does not support the audio element.
</audio>
      </div>
    </div>
  )
}
