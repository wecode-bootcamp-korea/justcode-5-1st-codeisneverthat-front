import React, { useState } from 'react';
import css from '../../pages/Cart/Cart.module.scss';
import { Link } from 'react-router-dom';

function Item({ item, items, setItems }) {
  const minusOne = () => {
    const newItems = items.map(each => {
      if (each.id === item.id) {
        return {
          ...each,
          quantity: each.quantity - 1,
          total: each.price * (each.quantity - 1),
        };
      } else {
        return each;
      }
    });
    setItems(newItems);
  };

  const plusOne = () => {
    const newItems = items.map(each => {
      if (each.id === item.id) {
        return {
          ...each,
          quantity: each.quantity + 1,
          total: each.price * (each.quantity + 1),
        };
      } else {
        return each;
      }
    });
    setItems(newItems);
  };

  const handleDeleteClick = () => {
    const newItems = items.filter(each => each.id !== item.id);
    setItems(newItems);
  };

  const handleMinusClick = () => {
    if (item.quantity === 1) {
      handleDeleteClick();
      return;
    }

    minusOne();
  };

  return (
    <div className={css.cart_component}>
      <div className={css.cart_image}>
        <img src={item.url}></img>
      </div>
      <div className={css.cart_content}>
        <div className={css.cart_sub_top}>
          <div className={css.cart_name_cancel}>
            <div className={css.product_name}>
              <Link to="/">{item.name}</Link>
            </div>
            <button className={css.cart_cancel} onClick={handleDeleteClick}>
              x
            </button>
          </div>
          <div className={css.product_color}>{item.color}</div>
          <div className={css.product_size}>{item.size}</div>
        </div>
        <div className={css.cart_sub_bottom}>
          <div className={css.cart_sub_btn}>
            <div className={css.cart_quantity_btn}>
              <button
                className={css.cart_quantity_minus}
                onClick={handleMinusClick}
              >
                &nbsp; -&nbsp;&nbsp;
              </button>
              <input
                className={css.cart_quantity}
                type="text"
                value={item.quantity}
                readOnly
                min="1"
              />
              <button className={css.cart_quantity_plus} onClick={plusOne}>
                &nbsp; +&nbsp;&nbsp;
              </button>
            </div>
            <div className={css.cart_price}>
              <span>￦{item.total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
