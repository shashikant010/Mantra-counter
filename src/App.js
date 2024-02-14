import './App.css';
import Congo from './components/Congo';
import Counter from './components/Counter';
import Mantra from './components/Mantra';
import gm from './gm.mp3';

function App() {
  return (
    <div className="App ">
      <div className="bgimg"></div>
      <h1>Mantra counter</h1>
      <div className="aud">
      <audio controls>
  <source src={gm} type="audio/mpeg"/>
Your browser does not support the audio element.
</audio>
      </div>
      
      <Mantra/>
      <Counter/>
      <Congo/>
    </div>
  );
}

export default App;
