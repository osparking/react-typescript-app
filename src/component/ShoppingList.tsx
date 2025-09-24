import { JSX } from "react";

const ShoppingList = (): JSX.Element => {
  const item = {
    id: 1,
    product: "수수",
    quantity: 1
  }
  return (
    <div>
      <h1>쇼핑 리스트</h1>
      <ul>
        <li>{item.id} {item.product} {item.quantity}</li>
      </ul>
    </div>
  )
}

export default ShoppingList