import React, { useState, useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ModalLayout from '../../modal';
import Search from './modal/Search';
import CartModal from '../CartItem/modal/CartModal';
import { UserContext } from '../../store/UserStore';
import { throttle } from 'lodash';
import BASE_URL from '../../config';

import css from './Header.module.scss';

function Header() {
  const context = useContext(UserContext);
  const { token, setToken } = context;

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
          cartquantity: item.quantity,
        }));
        setItems(cartItems);
      });
  }, [token, setItems]);

  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    const sum = items.reduce((sum, item) => {
      return sum + item.cartquantity;
    }, 0);
    setSubtotal(sum);
  }, [items]);

  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    setIsShowing(!isShowing);
  };

  const [cartModal, setCartModal] = useState(false);
  const openCartModal = () => {
    setCartModal(!cartModal);
  };

  const handleLogoutToken = () => {
    localStorage.removeItem('token');
    setToken('');
    alert('로그아웃 되었습니다.');
  };

  const [navbarOpen, setNavbarOpen] = useState(true);
  const handlenMenuToggle = () => {
    setNavbarOpen(prev => !prev);
  };

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        const nextTabnavOn = window.scrollY > window.scrollY + 100;
        if (nextTabnavOn !== cartModal) setCartModal(nextTabnavOn);
        if (nextTabnavOn !== isShowing) setIsShowing(nextTabnavOn);
      }, 300),
    [cartModal, isShowing]
  );
  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll); //clean up
    };
  }, [throttledScroll]);

  return (
    <>
      <header id={css['header']}>
        <div className={css.cont}>
          <div
            className={
              navbarOpen
                ? `${css.header_left}`
                : `${css.header_left} ${css.menuOn}`
            }
          >
            {/* <div className={css.header_left}> */}
            <button className={css.btn_menu} onClick={handlenMenuToggle}>
              <span className={css.menuWrap}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div className={css.left_menu_div}>
              <ul className={css.left_menu}>
                <li className={`${css.left_menu_li} ${css.header_shop}`}>
                  <Link className={css.btn_link} to="/collections">
                    SHOP
                  </Link>
                  <div className={css.shop_menu}>
                    <ul>
                      <li>
                        <Link to="/collections">All</Link>
                      </li>
                      <li>
                        <Link to="/collections?category=Tees">Tees</Link>
                      </li>
                      <li>
                        <Link to="/collections?category=Sweatshirts">
                          Sweatshirts
                        </Link>
                      </li>
                      <li>
                        <Link to="/collections?category=Shirts">Shirts</Link>
                      </li>
                      <li>
                        <Link to="#" onClick={e => e.preventDefault()}>
                          HDP Series
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={e => e.preventDefault()}>
                          Tops
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={e => e.preventDefault()}>
                          Bottoms
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={e => e.preventDefault()}>
                          Shorts
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={e => e.preventDefault()}>
                          Headwear
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={e => e.preventDefault()}>
                          Bags
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={e => e.preventDefault()}>
                          Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={e => e.preventDefault()}>
                          Socks & Underwear
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={e => e.preventDefault()}>
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={e => e.preventDefault()}>
                          Collaboration
                        </Link>
                      </li>
                      <li className={css.menu_archieves}>
                        <Link to="#" onClick={e => e.preventDefault()}>
                          Archieves &nbsp;&gt;
                        </Link>
                        <ul>
                          <li>
                            <Link to="#" onClick={e => e.preventDefault()}>
                              Tops
                            </Link>
                          </li>
                          <li>
                            <Link to="#" onClick={e => e.preventDefault()}>
                              Bottoms
                            </Link>
                          </li>
                          <li>
                            <Link to="#" onClick={e => e.preventDefault()}>
                              Accessories
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={css.left_menu_li}>
                  <Link className={css.btn_link} to="/top">
                    TOP20
                  </Link>
                </li>
                <li className={css.left_menu_li}>
                  <Link
                    className={css.btn_link}
                    to="#"
                    onClick={e => e.preventDefault()}
                  >
                    FEATURES
                  </Link>
                </li>
                <li className={css.left_menu_li}>
                  <button className={css.btn_link} onClick={openModal}>
                    SEARCH
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className={css.logo}>
            <Link to="/">
              <img src="images/logo.svg" alt="codeisneverthat logo" />
            </Link>
          </div>
          <div className={css.header_right}>
            <ul>
              <li>
                <Link
                  to="#"
                  className={css.btn_link}
                  onClick={e => e.preventDefault()}
                >
                  KOR / ₩
                </Link>
              </li>
              <li>
                {token ? (
                  <button className={css.btn_link} onClick={handleLogoutToken}>
                    LOGOUT
                  </button>
                ) : (
                  <Link className={css.btn_link} to="/Login">
                    LOGIN
                  </Link>
                )}
              </li>
              <li>
                <button className={css.btn_link} onClick={openCartModal}>
                  CART
                  <span>{subtotal}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {isShowing && (
        <ModalLayout openModal={openModal}>
          <Search openModal={openModal} />
        </ModalLayout>
      )}

      {cartModal && (
        <ModalLayout openCartModal={openCartModal}>
          <CartModal openCartModal={openCartModal} />
        </ModalLayout>
      )}
    </>
  );
}

export default Header;
