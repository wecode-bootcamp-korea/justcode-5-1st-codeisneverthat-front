import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  const [productDetails, setProductDetails] = useState({});
  const location = useLocation();

  console.log(location.search);
  useEffect(() => {
    fetch(`http://localhost:10010/product${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductDetails(data);
        console.log(data.data.category);
      });
  }, [location]);

  // const productId = 1;
  // const { colorImage, stockBySize } = productDetails.data[0];

  // const accessImageData = () => {
  //   const colorImageById = colorImage.filter(v => v.id === productId)[0];
  //   return colorImageById.images;
  // };

  // const colorImageData = accessImageData();
  // // console.log('colorImageData', colorImageData);

  // const accessStockData = () => {
  //   const stockBySizeById = stockBySize.filter(v => v.id === productId)[0];
  //   return stockBySizeById.sizeStock;
  // };

  // const stockBySizeData = accessStockData();
  // console.log('stockBySizeData', stockBySizeData);

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

  const [sliderNum, setSliderNum] = useState(1);

  const goToPrevImage = () => {
    if (sliderNum === 1) {
      setSliderNum(images.length);
    } else setSliderNum(sliderNum - 1);
  };

  const goToNextImage = () => {
    if (sliderNum === images.length) {
      setSliderNum(1);
    } else setSliderNum(sliderNum + 1);
  };

  // const extrafunction = () => {
  //   console.log('a');
  //   return () => {
  //     console.log('b');
  //   };
  // };

  return (
    <div className={css.container}>
      <div className={css.productThumbnailContainer}>
        {images.map((v, i) => (
          <div
            className={css.productThumbnail}
            key={v.id}
            onClick={() => {
              setSliderNum(i + 1);
            }}
          >
            <img
              className={css.productThumbnailImage}
              key={v.id}
              alt={v.id}
              src={v.url}
            />
          </div>
        ))}
      </div>
      <div className={css.productImageContainer}>
        <div className={css.prevIcon} onClick={goToPrevImage}>
          <FontAwesomeIcon
            className={css.angleLeft}
            icon="fa-solid fa-angle-left"
          />
        </div>
        <div className={css.sliderContainer}>
          <div
            className={css.sliderImage}
            style={{
              transform: 'translate(-' + (sliderNum - 1) * 460 + 'px, 0px)',
            }}
          >
            {images.map(v => (
              <img
                className={css.productImage}
                key={v.id}
                alt={v.id}
                src={v.url}
              />
            ))}
          </div>
          <div className={css.sliderPageContainer}>
            <span className={css.sliderPage}>
              {sliderNum}/{images.length}
            </span>
          </div>
        </div>
        <div className={css.nextIcon} onClick={goToNextImage}>
          <FontAwesomeIcon
            className={css.angleRight}
            icon="fa-solid fa-angle-right"
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
          <div className={css.modalContainer}>
            <div className={css.modal}>
              <span className={css.modalButton}>SIZE & FIT</span>
              <span>
                <FontAwesomeIcon
                  className={css.modalIcon}
                  icon="fa-solid fa-arrow-up-right-from-square"
                />
              </span>
            </div>
            <div className={css.modalDescription}>
              Model is 183cm(6') and wears size L.
            </div>
          </div>
          <div className={css.modalContainer}>
            <div className={css.modal}>
              <span className={css.modalButton}>SHIPPING</span>
              <span>
                <FontAwesomeIcon
                  className={css.modalIcon}
                  icon="fa-solid fa-arrow-up-right-from-square"
                />
              </span>
            </div>
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
