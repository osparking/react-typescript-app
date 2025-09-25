import React, { JSX, useRef } from 'react'

interface EntryFormProps {
  addItem: (item: string) => void;
}

const ItemEntryForm = ({addItem} : EntryFormProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleItemEntry(e: React.FormEvent) {
    e.preventDefault();
    addItem(inputRef.current!.value);
    inputRef.current!.value = "";
  }

  return (
    <form onSubmit={handleItemEntry}>
      <input type="text" placeholder='구매 항목 입력' ref={inputRef} />
      <button type="submit">항목 저장</button>
    </form>
  )
}

export default ItemEntryForm