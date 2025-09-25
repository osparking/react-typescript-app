import React, { JSX, useRef } from 'react'

const ItemEntryForm = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleItemEntry(e: React.FormEvent) {
    e.preventDefault();
    console.log("항목 입력됨: ", inputRef.current?.value);

  }

  return (
    <form onSubmit={handleItemEntry}>
      <input type="text" placeholder='구매 항목 입력' ref={inputRef} />
      <button type="submit">항목 저장</button>
    </form>
  )
}

export default ItemEntryForm