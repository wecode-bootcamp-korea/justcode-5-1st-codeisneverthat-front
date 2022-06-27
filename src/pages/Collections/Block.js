import React from 'react';
import css from './Block.module.scss';

function Block(props) {
  return (
    <div className={css.block}>
      <img className={css.image} src={props.image}></img>
      <div className={css.subimages}>
        <img className={css.subimage} src={props.subimages}></img>
        <img className={css.subimage} src={props.subimages2}></img>
      </div>
      <div className={css.name}>{props.name}</div>
      <div className={css.price}>₩ {props.price}</div>
    </div>
  );
}

export default Block;
