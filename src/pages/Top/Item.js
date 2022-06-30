import React from 'react';

import css from './Item.module.scss';

import { Link } from 'react-router-dom';
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@100&display=swap');
</style>;

function Item(props) {
  const id = props.id;
  const link = '/product?id='.concat(id);
  console.log(id);

  return (
    <Link to={link} className={css.forHover}>
      <div className={css.block}>
        <div className={css.left}>
          <div className={css.rankBlock}>{props.rank}</div>
          <div className={css.nameBlock}>{props.name}</div>
        </div>
        <div className={css.typeBlock}>{props.type}</div>
        <div className={css.imageBox}>
          <img className={css.imagesBlock1} src={props.image1}></img>
          <img className={css.imagesBlock2} src={props.image2}></img>
        </div>
      </div>
    </Link>
  );
}

export default Item;
