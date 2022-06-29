import React from 'react';
import css from './Cart.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Items from '../../components/CartItem/Items';

// const items = [
//   {
//     id: 1,
//     url: 'https://cdn.shopify.com/s/files/1/0562/4971/2815/products/NB-TNT-Waffle-Hoodie-DARK-GREY1_1080x.jpg?v=1644397496',
//     name: 'Good Tee',
//     color: 'Black',
//     size: 'OS',
//     price: 55000,
//   },
//   {
//     id: 2,
//     url: 'https://cdn.shopify.com/s/files/1/0562/4971/2815/products/Indigo-Dyed-Tee-Indigo1_1080x.jpg?v=1652950879',
//     name: 'Awesome Tee',
//     color: 'Blue',
//     size: 'OS',
//     price: 15000,
//   },
//   {
//     id: 3,
//     url: 'https://cdn.shopify.com/s/files/1/0562/4971/2815/products/Button-Up-S-S-Polo-Ivory1_1080x.jpg?v=1649912722',
//     name: 'Good Tee',
//     color: 'Black',
//     size: 'M',
//     price: 35000,
//   },
//   {
//     id: 4,
//     url: 'https://cdn.shopify.com/s/files/1/0562/4971/2815/products/Rolled-Sweater-Ivory1_1080x.jpg?v=1645939604',
//     name: 'Good Tee',
//     color: 'Red',
//     size: 'S',
//     price: 50000,
//   },
// ];

function Cart() {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:10010/cart/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItems(...items, data);
      });
  }, []);

  return (
    <div className={css.container}>
      <div className={css.main}>
        <div className={css.main_container}>
          <div className={css.cart_top}>
            <div className={css.cart_order}>
              <span> ORDER SUMMARY </span>
              <Link to="/" className={css.cart_back}>
                BACK
              </Link>
            </div>
            <Items items={items} />
          </div>
          <div className={css.cart_bottom}>
            <div className={css.cart_save_box}>
              <div className={css.cart_subtotal}>
                <span className={css.cart_subtotal_text}>SUBTOTAL</span>
                <span>￦기능구현해야함</span>
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
