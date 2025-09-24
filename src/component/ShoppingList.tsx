import { JSX } from "react";

const ShoppingList = (): JSX.Element => {
  const items = [{
    id: 1,
    product: "수수",
    quantity: 500
  }, {
    id: 2,
    product: "발가락 양말",
    quantity: 2
  }];

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