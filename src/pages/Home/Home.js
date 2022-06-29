import React from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.scss';

function Home() {
  return (
    <>
      <div className={css.image_container}>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_1.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_2.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_3.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_4.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_5.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_6.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_7.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_8.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_9.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_10.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_11.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_12.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_13.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_14.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_15.png" />
          </Link>
        </div>
        <div className={css.images}>
          <Link to="/collections">
            <img src="https://cdn.shopify.com/s/files/1/0562/4971/2815/files/home220607_16.png" />
          </Link>
        </div>
        <Link className={css.maintext} to="/collections">
          Shop All
        </Link>
        <Link className={css.maintext} to="/features">
          Features
        </Link>
        <Link className={css.maintext} to="/collections">
          Stores
        </Link>
        <Link className={css.maintext} to="/collections">
          Contact
        </Link>
      </div>
    </>
  );
}

export default Home;
