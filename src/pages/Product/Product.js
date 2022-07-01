import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Product.module.scss';
import SizeButton from '../../components/SizeButton/SizeButton';
import { UserContext } from '../../store/UserStore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleLeft,
  faAngleRight,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
library.add(faAngleLeft, faAngleRight, faArrowUpRightFromSquare);

function Product() {
  const context = useContext(UserContext);
  const { token } = context;

  const [productDetails, setProductDetails] = useState({});
  const location = useLocation();

  const [checkingSize, setCheckingSize] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:10010/product${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductDetails(data);
        setCheckingSize(
          data.data.stockBySize[0].size_stock[0].product_detatil_id
        );
      });
  }, [location]);

  const handleChange = e => {
    setCheckingSize(e.target.dataset.id);
  };

  const backData = productDetails?.data;
  let colorImageData = new Array();
  let stockBySizeData = new Array();
  let colorData = new Object();

  if (productDetails.data) {
    const productId = productDetails.data.productId;

    const { colorImage, stockBySize } = productDetails.data;

    const accessImageData = () => {
      const colorImageById = colorImage.filter(v => v.id === productId)[0];
      return colorImageById.images;
    };

    colorImageData = accessImageData();

    const accessStockData = () => {
      const stockBySizeById = stockBySize.filter(v => v.id === productId)[0];
      return stockBySizeById.size_stock;
    };

    stockBySizeData = accessStockData();

    const accessColorData = () => {
      const colorById = colorImage.filter(v => v.id === productId)[0];
      return colorById.color;
    };
    colorData = accessColorData();
  }

  const [sliderNum, setSliderNum] = useState(1);

  const goToPrevImage = () => {
    if (sliderNum === 1) {
      setSliderNum(colorImageData.length);
    } else setSliderNum(sliderNum - 1);
  };

  const goToNextImage = () => {
    if (sliderNum === colorImageData.length) {
      setSliderNum(1);
    } else setSliderNum(sliderNum + 1);
  };

  // const extrafunction = () => {
  //   console.log('a');
  //   return () => {
  //     console.log('b');
  //   };
  // };

  const handleAddCart = () => {
    fetch('http://localhost:10010/cart', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_details_id: checkingSize,
        quantity: 1,
      }),
    })
      .then(res => res.json())
      .then(() => {});
  };

  return (
    <div className={css.container}>
      <div className={css.productThumbnailContainer}>
        {colorImageData.map((v, i) => (
          <div
            className={css.productThumbnail}
            key={v.id}
            onClick={() => {
              setSliderNum(i + 1);
            }}
          >
            <img className={css.productThumbnailImage} alt={v.id} src={v.url} />
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
            {colorImageData.map(v => (
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
              {sliderNum}/{colorImageData.length}
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
          <span className={css.productName}>{backData?.productName}</span>
          <span className={css.productColor}>{colorData.color}</span>
        </h1>
        <div>
          <span className={css.productPrice}>{backData?.price}</span>
        </div>
        <div className={css.productColors}>
          {backData?.colorImage &&
            backData.colorImage.map(v => {
              return (
                <div className={css.productColorImage} key={v.id}>
                  <div className={css.colorImageDetailBox}>
                    <div className={css.colorImageDetail} key={v.id}>
                      {v.color.color}
                    </div>
                  </div>
                  <img alt={v.color.color} src={v.images[0].url} />
                </div>
              );
            })}
        </div>
        <div className={css.productSizes}>
          {stockBySizeData?.map((v, idx) => {
            return (
              <SizeButton
                key={v.product_detatil?.id}
                id={v.product_detatil_id}
                product_detatil_id={v.product_detatil_id}
                size={v.size}
                idx={idx}
                handleChange={handleChange}
              />
            );
          })}
        </div>
        <div className={css.addCartButtonContainer}>
          <button className={css.addCartButton} onClick={handleAddCart}>
            ADD TO CART
          </button>
        </div>
        <div className={css.productDescriptions}>
          <div className={css.productDescription}>{backData?.description}</div>
          <div className={css.productDescription}>
            Made in {backData?.made_in}
          </div>
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
