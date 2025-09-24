import React, { JSX } from 'react'

function handleItemEntry(e: React.FormEvent) {
  e.preventDefault();
  console.log("항목 입력됨");
}

const ItemEntryForm = ():JSX.Element => {
  return (
    <form onSubmit={handleItemEntry}>
      <input type="text" placeholder='구매 항목 입력'/>
      <button type="submit">항목 저장</button>
    </form>
  )
}

export default ItemEntryForm