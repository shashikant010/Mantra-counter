
import './App.css';
import Mantra from './components/Mantra';
import Aarti from './components/Aarti';

import HomePage from './components/HomePage';
import { HashRouter,Route,Routes } from 'react-router-dom'
import Player from './components/Player';

function App() {
  return (
    <HashRouter>
    <div className="App ">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Mantra' element={<Mantra/>}/>
        <Route path='/Aarti' element={<Aarti/>}/>
        <Route path='/player' element={<Player/>}/>

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
