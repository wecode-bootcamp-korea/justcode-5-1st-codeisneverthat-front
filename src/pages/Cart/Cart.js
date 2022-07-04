import React, { useContext } from 'react';
import css from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Items from '../../components/CartItem/Items';
import { UserContext } from '../../store/UserStore';

function Cart() {
  const context = useContext(UserContext);
  const { token } = context;

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:10010/cart', {
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
            <Link to="/" className={css.cart_back}>
              CLOSE
            </Link>
          </div>
          <Items items={items} setItems={setItems} />

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
}

export default Cart;
