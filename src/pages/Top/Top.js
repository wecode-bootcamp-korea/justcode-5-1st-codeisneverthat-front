import React, { useState, useEffect } from 'react';

import css from './Top.module.scss';

import Item from './Item';

function Top() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:10010/top20', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItems(...items, data);
      });
  }, []);

  return (
    <div className={css.container}>
      {items.map((item, index) => (
        <Item
          name={item.productName}
          rank={index + 1}
          type={item.category}
          image1={item.colorImage[0].images[0].url}
          image2={item.colorImage[1].images[0].url}
        />
      ))}
    </div>
  );
}

export default Top;
