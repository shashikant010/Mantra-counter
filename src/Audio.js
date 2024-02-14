import React from 'react';
import gm from './gm.mp3';

export default function Audio() {
    let audio=document.querySelector('audio');
  
  return (
    <div>
            <div className="aud">
      <audio controls autoPlay loop>
  <source src={gm} type="audio/mpeg"/>
Your browser does not support the audio element.
</audio>
      </div>
    </div>
  )
}
