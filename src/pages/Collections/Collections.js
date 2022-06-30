import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import css from './Collections.module.scss';
import Block from './Block';

function Collections() {
  function goTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  const [items, setItems] = useState([]);

  const location = useLocation();
  useEffect(() => {}, [location]);
  console.log(location.search);

  useEffect(() => {
    fetch(`http://localhost:10010/collections${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [location]);

  return (
    <div className={css.container}>
      {items.map(item => (
        <Block
          id={item.productId}
          name={item.productName}
          price={item.price}
          type={item.categoryId}
          image={item.colorImage[0].images[0].url}
          subimages2={item.colorImage[1].images[0].url}
        />
      ))}
      <button onClick={goTop} className={css.goBack}>
        <b>GO BACK TO TOP</b>
      </button>
    </div>
  );
}

export default Collections;
