import React from 'react';
import Item from './Item';

function Items({ items, setItems }) {
  console.log(items);
  return (
    <>
      {items.map(item => (
        <Item item={item} key={item.id} setItems={setItems} items={items} />
      ))}
    </>
  );
}

export default Items;
