import { useState } from 'react';
import './App.css';
import Congo from './components/Congo';
import Counter from './components/Counter';
import Mantra from './components/Mantra';
import Audio from './Audio';

function App() {
  const [play,setplay]=useState("autoplay")
  return (
    <div className="App ">
      <div className="bgimg"></div>
      <h1>Mantra counter</h1>

      <Audio/>
      <Mantra/>
      <Counter/>
      <Congo/>
    </div>
  );
}

export default App;
