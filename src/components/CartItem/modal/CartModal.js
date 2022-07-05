import css from './CartModal.module.scss';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../store/UserStore';
import { Link } from 'react-router-dom';
import BASE_URL from '../../../config';

function Item({ item, items, setItems }) {
  const context = useContext(UserContext);
  const { token } = context;

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
}

function Items({ items, setItems }) {
  return (
    <>
      {items.map(item => (
        <Item item={item} key={item.id} setItems={setItems} items={items} />
      ))}
    </>
  );
}

const CartModal = ({ openCartModal }) => {
  const context = useContext(UserContext);
  const { token } = context;

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/cart`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(items => {
        const cartItems = items.map(item => ({
          ...item,
          total: item.price * item.quantity,
        }));
        setItems(cartItems);
      });
  }, [token, setItems]);

  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    const sum = items.reduce((sum, item) => {
      return sum + item.total;
    }, 0);
    setSubtotal(sum);
  }, [items]);

  return (
    <div className={css.container}>
      <div className={css.main}>
        <div className={css.main_container}>
          <div className={css.cart_order}>
            <span> ORDER SUMMARY </span>
            <button onClick={openCartModal} className={css.cart_back}>
              CLOSE
            </button>
          </div>
          <div className={css.cart_content_container}>
            <Items items={items} setItems={setItems} />
          </div>
          <div className={css.cart_bottom}>
            <div className={css.cart_save_box}>
              <div className={css.cart_subtotal}>
                <span className={css.cart_subtotal_text}>SUBTOTAL</span>
                <span>￦{subtotal.toLocaleString()}</span>
              </div>
              <div className={css.cart_save_text}>
                적립금은 로그인 했을 시에만 이용 가능합니다. <br />
                적립금을 보유하고 있지 않을 시에는 적립금액이 표시되지 않습니다.
                <br />
                보유 중인 적립금 액수 확인은 어카운트 페이지에서 가능합니다.
                <br />
                구매 적립금 10%는 결제 완료 후 7일 뒤에 발행됩니다.
              </div>
            </div>
            <button className={css.cart_checkout_btn}>GO TO CHECKOUT</button>
            <div className={css.cart_coupon_notice}>
              배송비 및 쿠폰 적용은 결제 단계에서 적용됩니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
