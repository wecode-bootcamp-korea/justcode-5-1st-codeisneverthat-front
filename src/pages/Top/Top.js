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
    //window였었음
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
        setItems(...items, data);
      });
  }, []);

  console.log(cursorX, cursorY);

  return (
    <div className={css.container}>
      <ul className={css.project_list}>
        {items.map((item, index) => (
          <Card
            item={item}
            index={index}
            cursorX={cursorX}
            cursorY={cursorY}
            setImage={setImage}
          ></Card>
        ))}
      </ul>
      <div
        className={css.cursor}
        style={{
          left: cursorX + 'px',
          top: cursorY + 'px',
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
  const { item, index, cursorX, cursorY, setImage } = props;

  return (
    <li
      onMouseOver={() => {
        setImage(item.colorImage[0].images[0].url);
      }}
    >
      <Link to="./collections">
        <Item
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
