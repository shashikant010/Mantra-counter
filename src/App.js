import './App.css';
import Mantra from './components/Mantra';
import Aarti from './components/Aarti';
import HomePage from './components/HomePage';
import { HashRouter,Route,Routes } from 'react-router-dom'
import Player from './components/Player';

//images
import ganeshji from './images/ganesh.png'
import hanumaaanji from './images/hanumaan.png'

//aarties
import ganesharti from './music/ganeshArti.mp3'
import hanumaanaarti from './music/hanuman.mp3'

function App() {
  return (
    <HashRouter>
    <div className="App ">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Mantra' element={<Mantra/>}/>
        <Route path='/Aarti' element={<Aarti/>}/>
        <Route path='/player/ganesh' element={<Player arti={ganesharti} image={ganeshji}/>}/>
        <Route path='/player/hanumaan' element={<Player arti={hanumaanaarti} image={hanumaaanji}/>}/>

      {/**/}
      {/*  */}

      {/*  */}
      {/* <Mantra/> */}
      {/*  */}
      {/* <Congo/> */}
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
