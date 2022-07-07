import { useContext } from 'react';
import { UserContext } from '../../../../store/UserStore';
import { Link } from 'react-router-dom';
import BASE_URL from '../../../../config';
import css from './Item.module.scss';

const Item = ({ item, items, setItems }) => {
  const { token, setCartStatus } = useContext(UserContext);

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
    handleUpdate('minus');
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

    handleUpdate('plus');
    setItems(newItems);
  };

  const handleUpdate = cal => {
    fetch(`${BASE_URL}/cart`, {
      method: 'PUT',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_details_id: item.product_details_id,
        quantity: item.quantity,
        cal: cal,
      }),
    })
      .then(res => res.json())
      .then(() => {});
    setCartStatus(prev => !prev);
  };

  const handleDeleteClick = () => {
    const newItems = items.filter(each => each.id !== item.id);
    setItems(newItems);

    fetch(`${BASE_URL}/cart`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_details_id: item.product_details_id,
      }),
    })
      .then(res => res.json())
      .then(() => {});
    setCartStatus(prev => !prev);
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
        <img alt="productImage" src={item.url} />
      </div>
      <div className={css.cart_content}>
        <div className={css.cart_name_cancel}>
          <div className={css.product_name}>
            <Link to="/">{item.name}</Link>
          </div>
          <button onClick={handleDeleteClick}>x</button>
        </div>
        <div className={css.product_color}>{item.color}</div>
        <div className={css.product_size}>{item.size}</div>

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
  );
};

export default Item;
