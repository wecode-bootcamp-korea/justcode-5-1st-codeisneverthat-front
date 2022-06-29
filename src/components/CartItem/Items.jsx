import React, { useEffect, useState } from 'react';
import Item from './Item';

function Items({ items }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setArticles(items);
  }, [items]);

  return (
    <>
      {articles.map(item => (
        <Item
          item={item}
          key={item.id}
          setArticles={setArticles}
          articles={articles}
        />
      ))}
    </>
  );
}

export default Items;
