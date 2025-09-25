import { useState } from 'react';
import './App.css';
import ShoppingList from './component/ShoppingList';
import ShopItem from './models/ShopItem';
import ItemEntryForm from './component/ItemEntryForm';
import { v4 as getId } from 'uuid';

function App() {
  const [items, setItems] = useState<ShopItem[]>([]);

  function addItem(item: string):void {
    const itemObj = {id: getId(), product: item, quantity: 1};
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
