import React, { useState, useEffect } from 'react';
import css from './Block.module.scss';
import { Link } from 'react-router-dom';

function Block(props) {
  const id = props.id;
  const link = '/product?id='.concat(id);
  // console.log(id);

  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    setMainImage(props.image);
  }, [props.image]);

  return (
    <div className={css.block}>
      <Link to={link}>
        {' '}
        <img className={css.image} src={mainImage} />
      </Link>
      <div className={css.subimages}>
        <img
          className={css.subimage1}
          src={props.image}
          onClick={() => {
            setMainImage(props.image);
          }}
        ></img>
        <img
          className={css.subimage2}
          src={props.subimages2}
          onClick={() => {
            setMainImage(props.subimages2);
          }}
        ></img>
      </div>
      <Link to={link} className={css.forSize}>
        <div className={css.name}>{props.name}</div>
        <div className={css.price}>₩ {props.price}</div>
      </Link>
    </div>
  );
}

export default Block;
