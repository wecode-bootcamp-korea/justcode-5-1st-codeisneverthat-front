import React from 'react';
import css from './Block.module.scss';
import { Link } from 'react-router-dom';

function Block(props) {
  const id = props.id;
  const link = '/product?id='.concat(id);
  console.log(id);
  return (
    <Link to={link} className={css.block}>
      <img className={css.image} src={props.image}></img>
      <div className={css.subimages}>
        <img className={css.subimage1} src={props.image}></img>
        <img className={css.subimage2} src={props.subimages2}></img>
      </div>
      <div className={css.name}>{props.name}</div>
      <div className={css.price}>₩ {props.price}</div>
    </Link>
  );
}

export default Block;
