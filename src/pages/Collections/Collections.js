import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BASE_URL from '../../config';

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
  const [category, setCategory] = useState('All');
  const [sortModal, setSortModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  function categorySetter() {
    if (location.search === '') {
      setCategory('All');
    } else {
      setCategory(location.search.split('=').pop());
    }
  }

  const location = useLocation();
  useEffect(() => {
    categorySetter();
  }, [location]);

  useEffect(() => {
    fetch(`${BASE_URL}/collections${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [location]);

  return (
    <div className={css.container}>
      <button
        className={css.button}
        style={{
          background: '#0e0',
          fontSize: '1.6rem',
          padding: '7px 14px',
          position: 'relative',
          left: '3%',
        }}
      >
        {category}
      </button>
      <button
        className={css.sort}
        style={{
          background: 'lightgrey',
          fontSize: '1.6rem',
          padding: '7px 14px',
          margin: 0,
        }}
      >
        Sort
      </button>

      <button
        className={css.view}
        style={{
          background: 'lightgrey',
          fontSize: '1.6rem',
          padding: '7px 14px',
          margin: 0,
        }}
      >
        View
      </button>

      <div className={css.container_cont}>
        {items.map(item => (
          <Block
            stock={item.stockBySize}
            key={item.productId}
            id={item.productId}
            colorId={item.colorImage}
            name={item.productName}
            price={item.price}
            type={item.categoryId}
            image={item.colorImage[0].images[0].url}
            subimages2={item.colorImage[1].images[0].url}
          />
        ))}
      </div>
      <button onClick={goTop} className={css.goBack}>
        <b>GO BACK TO TOP</b>
      </button>
    </div>
  );
}

export default Collections;
