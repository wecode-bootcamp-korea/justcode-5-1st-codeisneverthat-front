import React, { useState, useEffect, useRef } from 'react';

import css from './Top.module.scss';

import Item from './Item';

import { Link } from 'react-router-dom';

function Top() {
  const [items, setItems] = useState([]);
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  const [image, setImage] = useState('');

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    });
  }, []);

  useEffect(() => {
    fetch('http://localhost:10010/top20', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  console.log(cursorX, cursorY);

  return (
    <div className={css.container}>
      <ul className={css.project_list}>
        {items.map((item, index) => (
          <Card item={item} index={index} setImage={setImage}></Card>
        ))}
      </ul>
      <div
        className={css.cursor}
        style={{
          left: cursorX + 5 + 'px',
          top: cursorY + 5 + 'px',
        }}
      >
        {' '}
        <img className={css.cursorImage} src={image} />
      </div>
    </div>
  );
}

export default Top;

function Card(props) {
  const { item, index, setImage } = props;

  return (
    <li
      onMouseOver={() => {
        setImage(item.colorImage[0].images[0].url);
      }}
      onMouseLeave={() => {
        setImage(' ');
      }}
    >
      <Link to="./collections">
        <Item
          id={item.productId}
          name={item.productName}
          rank={index + 1}
          type={item.category}
          image1={item.colorImage[0].images[0].url}
          image2={item.colorImage[1].images[0].url}
        />
      </Link>
    </li>
  );
}
