import { JSX } from "react";

interface ShopItem {
  id: number;
  product: string;
  quantity: number;
}

interface ListParam {
  items: ShopItem[];
}

  return (
    <div>
      <h1>쇼핑 리스트</h1>
      <ul>
        {items.map((item) =>
          <li key={item.id}>{item.product} - {item.quantity}</li>
        )}
      </ul>
    </div>
  )
}

export default ShoppingList