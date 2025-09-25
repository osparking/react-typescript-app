import { useState } from 'react';
import './App.css';
import ShoppingList from './component/ShoppingList';
import ShopItem from './models/ShopItem';
import ItemEntryForm from './component/ItemEntryForm';

function App() {
  const [items, setItems] = useState<ShopItem[]>([]);

  function addItem(item: string):void {
    const itemObj = {id: 1, product: item, quantity: 1};
    setItems([...items, itemObj]);
  }

  return (
    <div>
      <ShoppingList items={items} />
      <ItemEntryForm addItem={addItem} />
    </div>
  );
}

export default App;
