import React, { useState } from 'react';
import css from '../../pages/Cart/Cart.module.scss';
import { Link } from 'react-router-dom';

function Item({ item, setArticles, articles }) {
  console.log(item);

  const [quantity, setQuantity] = useState(1);
  const minusOne = () => {
    setQuantity(current => current - 1);
  };
  const plusOne = () => {
    setQuantity(current => current + 1);
  };

  const [price, setPrice] = useState(item.price);
  const totalPrice = event => {
    setPrice(event.target.value);
  };

  const totalPricePerItem = price * quantity;

  const handleDeleteClick = () => {
    const newArticles = articles.filter(article => article.id !== item.id);
    setArticles(newArticles);
  };

  const handleMinusClick = () => {
    if (quantity === 1) {
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
                value={quantity}
                readOnly
                min="1"
              />
              <button
                className={css.cart_quantity_plus}
                onClick={plusOne}
                onChange={totalPrice}
              >
                &nbsp; +&nbsp;&nbsp;
              </button>
            </div>
            <div className={css.cart_price}>
              <span>￦{totalPricePerItem.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
