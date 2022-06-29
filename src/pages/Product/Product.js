import React from 'react';
import { useState, useEffect } from 'react';

import css from './Product.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleLeft,
  faAngleRight,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
library.add(faAngleLeft, faAngleRight, faArrowUpRightFromSquare);

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

  const productId = 1;
  const { colorImage, stockBySize } = productDetails.data[0];

  const accessImageData = () => {
    const colorImageById = colorImage.filter(v => v.id === productId)[0];
    return colorImageById.images;
  };

  const colorImageData = accessImageData();
  console.log('colorImageData', colorImageData);

  const accessStockData = () => {
    const stockBySizeById = stockBySize.filter(v => v.id === productId)[0];
    return stockBySizeById.sizeStock;
  };

  const stockBySizeData = accessStockData();
  console.log('stockBySizeData', stockBySizeData);
  // const apiData = productDetails.data[0].colorImage;
  // console.log('apiData = ', apiData);

  // const colorImageArr = Object.fromEntries(
  //   Object.entries(apiData).filter(id => (id = 1))
  // );
  // console.log(colorImageArr);
  // Object.fromEntries(Object.entries(obj).filter(([key]) => key.includes('Name')));

  // console.log(Object.entries(apiData).filter(id => (Object.key = 1)));
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
            className={css.productThumbnailImage}
            alt="sub"
            src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/DSN-Logo-Tee-Black1_110x110@2x.jpg?v=1646387533"
          />
        </div>
        <div className={css.productThumbnail}>
          <img
            className={css.productThumbnailImage}
            alt="sub"
            src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/DSN-Logo-Tee-Black5_110x110@2x.jpg?v=1646387533"
          />
        </div>
      </div>
      <div className={css.productImageContainer}>
        <div className={css.prevIcon}>
          <FontAwesomeIcon
            className={css.angleLeft}
            icon="fa-solid fa-angle-left"
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
        <h1 className={css.productHead}>
          <span className={css.productName}>DSN-Logo Tee</span>
          <span className={css.productColor}>Black</span>
        </h1>
        <div>
          <span className={css.productPrice}>₩45,000</span>
        </div>
        <div className={css.productColors}>
          <div className={css.productColorImage}>
            <div className={css.colorImageDetailBox}>
              <div className={css.colorImageDetail}>White</div>
            </div>
            <img
              alt="White"
              src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/DSN-Logo-Tee-White1_1080x.jpg?v=1646387533"
            />
          </div>
          <div className={css.productColorImage}>
            <div className={css.colorImageDetailBox}>
              <div className={css.colorImageDetail}>Black</div>
            </div>
            <img
              alt="Black"
              src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/DSN-Logo-Tee-Black1_1080x.jpg?v=1646387533"
            />
          </div>
          <div className={css.productColorImage}>
            <div className={css.colorImageDetailBox}>
              <div className={css.colorImageDetail}>Dark Mocha</div>
            </div>
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
            <span className={css.modalButton}>SIZE & FIT</span>
            <span>
              <FontAwesomeIcon
                className={css.modalIcon}
                icon="fa-solid fa-arrow-up-right-from-square"
              />
            </span>
            <div className={css.modalDescription}>
              Model is 183cm(6') and wears size L.
            </div>
          </div>
          <div className={css.modal}>
            <span className={css.modalButton}>SHIPPING</span>
            <span>
              <FontAwesomeIcon
                className={css.modalIcon}
                icon="fa-solid fa-arrow-up-right-from-square"
              />
            </span>
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
