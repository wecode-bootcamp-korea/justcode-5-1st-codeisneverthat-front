import React from 'react';
import { useState, useEffect } from 'react';

import css from './Product.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleLeft, faAngleRight);

function Product() {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/productDetailData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductDetails(data);
      });
  }, []);

  // key={productDetails.datas.data.productId}
  // id={productDetails.data.productName}
  // price={productDetails.data.price}
  // madeIn={productDetails.data.madeIn}
  // description={productDetails.data.description}
  // category={productDetails.data.category}
  // color={productDetails.data.colorImage.color}
  // productMainImage={productDetails.data.colorImage[0].images[0]}
  // productSubImage={productDetails.data.colorImage[0].images[1]}
  // colorImage={productDetails.data.colorImage[1].images[0]}
  // productSize={productDetails.data.stockBySize.sizeStock}

  return (
    <div className={css.container}>
      <div className={css.productThumbnailContainer}>
        <div className={css.productThumbnail}>
          <img
            alt="sub"
            src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/DSN-Logo-Tee-Black1_110x110@2x.jpg?v=1646387533"
          />
        </div>
        <div className={css.productThumbnail}>
          <img
            alt="sub"
            src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/DSN-Logo-Tee-Black5_110x110@2x.jpg?v=1646387533"
          />
        </div>
      </div>
      <div className={css.productImageContainer}>
        <div className={css.prevIcon}>
          <FontAwesomeIcon
            className={css.angleLeft}
            /*style={}*/ icon="fa-solid fa-angle-left"
          />
        </div>
        <div className={css.productImage}>
          <img
            alt="main"
            src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/DSN-Logo-Tee-Black1_1080x.jpg?v=1646387533"
          />
        </div>
        <div className={css.nextIcon}>
          <FontAwesomeIcon
            className={css.angleRight}
            /*style={}*/ icon="fa-solid fa-angle-right"
          />
        </div>
      </div>
      <div className={css.productInfoContainer}>
        <div className={css.productHead}>
          <span className={css.productName}>DSN-Logo Tee</span>
          <span className={css.productColor}>Black</span>
        </div>
        <div>
          <span className={css.productPrice}>₩45,000</span>
        </div>
        <div className={css.productColors}>
          <div className={css.productColorImage}>
            <img
              alt="White"
              src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/DSN-Logo-Tee-White1_1080x.jpg?v=1646387533"
            />
          </div>
          <div className={css.productColorImage}>
            <img
              alt="Black"
              src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/DSN-Logo-Tee-Black1_1080x.jpg?v=1646387533"
            />
          </div>
          <div className={css.productColorImage}>
            <img
              alt="Dark Mocha"
              src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/DSN-Logo-Tee-Dark-Mocha1_1080x.jpg?v=1646387533"
            />
          </div>
        </div>
        <div className={css.productSizes}>
          <div className={css.sizeBox}>S</div>
          <div className={css.sizeBox}>M</div>
          <div className={css.sizeBox}>L</div>
        </div>
        <div className={css.addCartButtonContainer}>
          <span className={css.addCartButton}>ADD TO CART</span>
        </div>
        <div className={css.productDescriptions}>
          <div className={css.productDescription}>Flag label on sleeve hem</div>
          <div className={css.productDescription}>Pigment dying for Grey</div>
          <div className={css.productDescription}>Cotton 100%</div>
          <div className={css.productDescription}>Made in Bangladesh</div>
        </div>
        <div>
          <div className={css.modal}>
            <div className={css.modalButton}>SIZE & FIT</div>
            <div className={css.modalDescription}>
              Model is 183cm(6') and wears size L.
            </div>
          </div>
          <div className={css.modal}>
            <div className={css.modalButton}>SHIPPING</div>
            <div className={css.modalDescription}>
              서울 및 경기 일부 지역 당일배송 가능
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
