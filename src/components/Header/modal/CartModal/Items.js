import Item from './Item';

function Items({ items, setItems }) {
  return (
    <>
      {items.map(item => (
        <Item item={item} key={item.id} setItems={setItems} items={items} />
      ))}
    </>
  );
}

export default Items;
