import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ModalLayout from '../../modal';
import Search from './modal/Search';

import css from './Header.module.scss';

function Header() {
  const location = useLocation();
  // useEffect(() => {
  //   console.log('sdf');
  //   localStorage.setItem('token', token);
  //   console.log(localStorage);
  // }, [location]);

  /*const useStorage = storageName => {
    const checkStorage = key => {
      const storedData = localStorage.getItem(key);
      if (!storedData) console.log('Local storage is empty');
    };

    useEffect(() => {
      // when app loaded
      checkStorage(storageName);

      // when storage updated
      const handler = ({ key }) => checkStorage(key);
      window.addEventListener('storage', handler);
      return () => window.removeEventListener('storage', handler);
    }, []);
  }; */

  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    setIsShowing(!isShowing);
  };

  const [token, setToken] = useState(() => {
    const saved = localStorage.getItem('token');
    return saved || '';
  });

  // console.log(location);
  // useEffect(() => {
  //   // console.log('location');
  //   // setToken(token);
  //   // console.log('location' + token);
  //   const saved = localStorage.getItem('token');
  // }, [location]);

  // useEffect(() => {
  //   const saved = localStorage.getItem('token');
  //   // console.log('useeffect');
  //   // setToken(token);
  //   // console.log('useeffect' + token);
  // }, [token]);

  // const [loginButton, setLoginButton] = useState('LOGIN');

  // useEffect(() => {
  //   fetch('http://localhost:3000/Login', {
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       Authorization: localStorage.token,
  //       Accept: 'application/json',
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(token);
  //     });
  //   return () => {
  //     console.log('ㄴㄴ');
  //   };
  // }, [location]);

  // console.log(token, '+++++++');

  useEffect(() => {
    console.log(localStorage.token);
    const saved = localStorage.token;
    return saved;
  }, [location]);

  const handleLogoutToken = () => {
    console.log('눌림');
    localStorage.removeItem('token');
  };

  const checkToken = saved => {
    if (saved) {
      return true;
    }
    return false;
  };

  return (
    <>
      <header id={css['header']}>
        <div className={css.cont}>
          <div className={css.header_left}>
            <ul className={css.left_menu}>
              <li className={`${css.left_menu_li} ${css.header_shop}`}>
                <Link
                  className={css.btn_link}
                  to="#"
                  onClick={e => e.preventDefault()}
                >
                  SHOP
                </Link>
                <div className={css.shop_menu}>
                  <ul>
                    <li>
                      <Link to="#" onClick={e => e.preventDefault()}>
                        New
                      </Link>
                    </li>
                    <li>
                      <Link to="#" onClick={e => e.preventDefault()}>
                        All
                      </Link>
                    </li>
                    <li>
                      <Link to="#" onClick={e => e.preventDefault()}>
                        Outerwear
                      </Link>
                    </li>
                    <li>
                      <Link to="#" onClick={e => e.preventDefault()}>
                        Sweatshirts
                      </Link>
                    </li>
                    <li>
                      <Link to="#" onClick={e => e.preventDefault()}>
                        HDP Series
                      </Link>
                    </li>
                    <li>
                      <Link to="#" onClick={e => e.preventDefault()}>
                        Tees
                      </Link>
                    </li>
                    <li>
                      <Link to="#" onClick={e => e.preventDefault()}>
                        Shirts
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
                <Link
                  className={css.btn_link}
                  to="#"
                  onClick={e => e.preventDefault()}
                >
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
                {/* <Link to="#" onClick={e => e.preventDefault()}>
                  SEARCH
                </Link> */}
              </li>
            </ul>
          </div>
          <div className={css.logo}>
            <Link to="/">
              <img src="images/logo.svg" />
            </Link>
          </div>
          <div className={css.header_right}>
            <ul>
              <li>
                <Link to="#" onClick={e => e.preventDefault()}>
                  KOR / ₩
                </Link>
              </li>
              <li>
                {checkToken ? (
                  <button onClick={handleLogoutToken}>LOGOUT</button>
                ) : (
                  <Link to="/Login">LOGIN</Link>
                )}
              </li>
              <li>
                <Link to="/cart">
                  CART
                  <span>0</span>
                </Link>
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
    </>
  );
}

export default Header;
