import React, { useState, useEffect } from 'react';

import css from './Collections.module.scss';
import Block from './Block';

function Collections() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:10010/collections', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItems(...items, data);
      });
  }, []);

  return (
    <div className={css.container}>
      {items.map(item => (
        <Block
          name={item.productName}
          price={item.price}
          type={item.categoryId}
          image={item.colorImage[0].images[0].url}
          subimages2={item.colorImage[1].images[0].url}
        />
      ))}
    </div>
  );
}

export default Collections;
