import './App.css';
import Congo from './components/Congo';
import Counter from './components/Counter';
import Mantra from './components/Mantra';

function App() {
  return (
    <div className="App">
      <h1>Mantra counter</h1>
      <Mantra/>
      <Counter/>
      <Congo/>
    </div>
  );
}

export default App;
