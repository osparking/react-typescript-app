import React, { JSX, useRef } from 'react'

interface EntryFormProps {
  addItem: (itemName: string, quantity: number) => void;
}

const ItemEntryForm = ({addItem} : EntryFormProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<HTMLInputElement>(null);

  function handleItemEntry(e: React.FormEvent) {
    e.preventDefault();
    addItem(inputRef.current!.value, parseInt(countRef.current!.value));
    inputRef.current!.value = "";
    countRef.current!.value = "0";
  }

  return (
    <form onSubmit={handleItemEntry}>
      <input type="text" placeholder='구매 항목 입력' ref={inputRef} />
      <input type="number" placeholder='(수량)' min={0} ref={countRef} />
      <button type="submit">항목 저장</button>
    </form>
  )
}

export default ItemEntryForm