import React from 'react';
import css from './Cart.module.scss';
import { Link } from 'react-router-dom';

function Cart() {
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
            <div className={css.cart_component}>
              <div className={css.cart_image}>
                <img src=""></img>
              </div>
              <div className={css.cart_content}>
                <div className={css.cart_sub_top}>
                  <div className={css.cart_name_cancel}>
                    <div className={css.product_name}>
                      <Link to="/">TNT BROWN Tote Bag</Link>
                    </div>
                    <div className={css.cart_cancel}>x</div>
                  </div>
                  <div className={css.product_color}>Black</div>
                  <div className={css.product_size}>Size OS</div>
                </div>
                <div className={css.cart_sub_bottom}>
                  <div className={css.cart_sub_btn}>
                    <div className={css.cart_quantity_btn}>
                      <button className={css.cart_quantity_minus}>
                        &nbsp; -&nbsp;&nbsp;
                      </button>
                      <input
                        className={css.cart_quantity}
                        type="text"
                        value="1"
                        min="1"
                      />
                      <button className={css.cart_quantity_plus}>
                        &nbsp; +&nbsp;&nbsp;
                      </button>
                    </div>
                    <div className={css.cart_price}>
                      <span>￦99,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.cart_bottom}>
            <div className={css.cart_save_box}>
              <div className={css.cart_subtotal}>
                <span className={css.cart_subtotal_text}>SUBTOTAL</span>
                <span>￦306,000</span>
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
