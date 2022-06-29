import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Item from './Item';

function Items({ items }) {
  const location = useLocation();
  console.log(items);
  const [articles, setArticles] = useState([]);
  useEffect(() => {}, [location]);
  useEffect(() => {
    setArticles(items);
  }, []);

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
