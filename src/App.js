import { useState } from 'react';
import './App.css';
import Mantra from './components/Mantra';

import HomePage from './HomePage';
import { HashRouter,Link,Route,Routes } from 'react-router-dom'

function App() {
  const [play,setplay]=useState("autoplay")
  return (
    <HashRouter>
    <div className="App ">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Mantra' element={<Mantra/>}/>

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
