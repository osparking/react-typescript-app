import { useState } from 'react';
import './App.css';
import ShoppingList from './component/ShoppingList';
import ShopItem from './models/ShopItem';

function App() {
  const [items, setItems] = useState<ShopItem[]>([]);
  // const items = [{
  //   id: 1,
  //   product: "수수",
  //   quantity: 500
  // }, {
  //   id: 2,
  //   product: "발가락 양말",
  //   quantity: 2
  // }];

  return (
    <div>
      <ShoppingList items={items}/>
    </div>
  );
}

export default App;
