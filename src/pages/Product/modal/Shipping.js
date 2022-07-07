import React from 'react';
import css from './Shipping.module.scss';

function Shipping({ openShippingModal }) {
  return (
    <div className={css.container}>
      <div className={css.shippingHeader}>
        <div>Shipping</div>
        <div className={css.closeButton} onClick={openShippingModal}>
          CLOSE
        </div>
      </div>
      <div>
        <div className={css.header}>당일배송 서비스</div>
      </div>
      <div>
        <div>
          당일 오전 11시 이전 결제건에 한하여 당일배송 서비스 이용이 가능합니다.
        </div>
        <div>
          결제 페이지에서 배송 받으실 주소에 아래 기재된 당일배송 가능지역의
          우편번호를 입력하시면 당일배송 옵션을 선택하실 수 있습니다.
        </div>
      </div>
      <div>
        <div>배송비: 3,500월</div>
        <div>
          당일배송 가능지역: 서울, 고양시, 안산시(대부도 제외), 안양시, 부천시,
          의정부시, 구리시, 하남시, 성남시, 의왕시, 광명시, 군포시,
          인천시(강화도 및 일부 섬지역 제외), 수원시, 과천시
        </div>
        <div>운영일: 월 - 금 (토, 일, 공휴일 제외)</div>
        <div>결제기한: 오전 11시</div>
      </div>
      <div>
        <div>• 당일배송 상품 수령시간 지정은 불가합니다.</div>
        <div>
          • 당일 오전 11:00 이전 완료된 주문 건은 당일 24:00까지 제품 수령이
          가능합니다.
        </div>
        <div>
          • 당일 오전 11:00 이후 완료된 주문 건은 다음날 24:00까지 제품 수령이
          가능합니다.
        </div>
        <div>• 제품 수령 시간은 주문 상황에 따라 조금 지연될 수 있습니다.</div>
      </div>
      <div>
        <div className={css.header}>일반배송 서비스 (CJ 대한통운)</div>
      </div>
      <div>
        <div>배송비: 무료</div>
        <div>배송기간: 2 - 4 영업일</div>
      </div>
      <div>
        <div>• 상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.</div>
      </div>
    </div>
  );
}

export default Shipping;
