import './App.css';
import ShoppingList from './component/ShoppingList';

const calculate = <T,>(param: T): T => {
  return param;
}

function App() {
  return (
    <div>
      <ShoppingList />
    </div>
  );
}

export default App;
