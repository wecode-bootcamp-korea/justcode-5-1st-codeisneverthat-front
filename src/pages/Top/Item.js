import React from 'react';

import css from './Item.module.scss';

function Item(props) {
  return (
    <span className={css.forHover}>
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
    </span>
  );
}

export default Item;
