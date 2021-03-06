import React, { useState, useEffect } from 'react';
import css from './Top.module.scss';
import Item from './Item';
import BASE_URL from '../../config';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@100&display=swap');
</style>;

function Top() {
  const [items, setItems] = useState([]);
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  const [image, setImage] = useState('');
  const current = new Date();

  const [month, setMonth] = useState(current.getMonth() + 1);
  const [year, setYear] = useState(current.getFullYear());

  function numberToString(num) {
    var result;
    switch (num) {
      case 1:
        result = 'January';
        break;
      case 2:
        result = 'February';
        break;
      case 3:
        result = 'March';
        break;
      case 4:
        result = 'April';
        break;
      case 5:
        result = 'May';
        break;
      case 6:
        result = 'June';
        break;
      case 7:
        result = 'July';
        break;
      case 8:
        result = 'August';
        break;
      case 9:
        result = 'September';
        break;
      case 10:
        result = 'October';
        break;
      case 11:
        result = 'November';
        break;
      case 12:
        result = 'December';
        break;
      default:
        result = 'none';
    }
    return result;
  }

  useEffect(() => {
    setMonth(numberToString(current.getMonth() + 1));
    setYear(current.getFullYear());
  }, [current]);

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/top20`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  return (
    <div className={css.container}>
      <span className={css.date}>
        Trending items in {month} / {year}{' '}
      </span>
      <ul className={css.project_list}>
        {items.map((item, index) => (
          <Card item={item} key={item.id} index={index} setImage={setImage} />
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
        <img className={css.cursorImage} src={image} alt="img" />
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
        setImage('data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs');
      }}
    >
      <div>
        <Item
          colorId={item.colorImage}
          id={item.id}
          name={item.productName}
          rank={index + 1}
          type={item.category}
          image1={item.colorImage[0].images[0].url}
          image2={item.colorImage[1].images[0].url}
        />
      </div>
    </li>
  );
}
