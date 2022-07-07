import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalLayout from '../../modal';
import Search from './modal/Search';
import CartModal from './modal/CartModal/CartModal';
import { UserContext } from '../../store/UserStore';
import { throttle } from 'lodash';
import BASE_URL from '../../config';

import css from './Header.module.scss';

function Header() {
  const { token, setToken, cartStatus } = useContext(UserContext);

  const [items, setItems] = useState([]);
  useEffect(() => {
    if (token !== '') {
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
    }
  }, [token, setItems, cartStatus]);

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

  const [mobileToggleMenu, setMobileToggleMenu] = useState(true);
  const handlenMenuToggle = () => {
    setMobileToggleMenu(prev => !prev);
  };

  useEffect(() => {
    const throttleScroll = () => {
      return throttle(() => {
        const scrollingFalse = window.scrollY > window.scrollY + 10;
        if (scrollingFalse !== cartModal) setCartModal(scrollingFalse);
        if (scrollingFalse !== isShowing) setIsShowing(scrollingFalse);
      }, 300);
    };

    window.addEventListener('scroll', throttleScroll());
    return () => {
      window.removeEventListener('scroll', throttleScroll()); //clean up
    };
  }, [cartModal, isShowing]);

  return (
    <>
      <header id={css['header']}>
        <div className={css.cont}>
          <div
            className={
              mobileToggleMenu
                ? `${css.header_left}`
                : `${css.header_left} ${css.menuhandlenMenuToggleOn}`
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
                        <Link to="/collections" onClick={handlenMenuToggle}>
                          All
                        </Link>
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
