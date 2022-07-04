import React, { useState, useEffect } from 'react';
import css from './Block.module.scss';
import { Link } from 'react-router-dom';

function Block(props) {
  const id = props.id;

  const [mainImage, setMainImage] = useState('');
  const [mainColor, setMainColor] = useState('');

  const link = '/product?id='
    .concat(id)
    .concat('/product_color?id=')
    .concat(mainColor);
  useEffect(() => {
    setMainImage(props.image);
    setMainColor(props.colorId[0].id);
  }, [props.image]);

  return (
    <div className={css.block}>
      <Link to={link}>
        {' '}
        <img className={css.image} src={mainImage} alt="img" />
      </Link>
      <div className={css.subimages}>
        <div>
          <img
            className={css.subimage1}
            src={props.image}
            onClick={() => {
              setMainImage(props.image);
              setMainColor(props.colorId[0].id);
            }}
            alt="img"
          />
        </div>
        <div>
          <img
            className={css.subimage2}
            src={props.subimages2}
            onClick={() => {
              setMainImage(props.subimages2);
              setMainColor(props.colorId[1].id);
            }}
            alt="img"
          />
        </div>
      </div>
      <Link to={link} className={css.forSize}>
        <div className={css.name}>{props.name}</div>
        <div className={css.price}>₩ {props.price}</div>
      </Link>
    </div>
  );
}

export default Block;
