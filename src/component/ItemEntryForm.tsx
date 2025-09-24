import React, { JSX } from 'react'

const ItemEntryForm = ():JSX.Element => {
  return (
    <form>
      <input type="text" placeholder='구매 항목 입력'/>
      <button type="submit">항목 저장</button>
    </form>
  )
}

export default ItemEntryForm