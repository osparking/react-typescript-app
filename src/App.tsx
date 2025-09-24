import './App.css';
import Greeter from './component/Greeter';

const calculate = <T,>(param: T): T => {
  return param;
}

function App() {
  return (
    <div className="App">
      <Greeter />
    </div>
  );
}

export default App;
