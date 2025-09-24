import './App.css';
import Greeter from './component/Greeter';

const calculate = <T,>(param: T): T => {
  return param;
}

function App() {
  return (
    <div className="App">
      <Greeter person="길동"/>
      <Greeter person="이재"/>
      <Greeter person="박은"/>
    </div>
  );
}

export default App;
