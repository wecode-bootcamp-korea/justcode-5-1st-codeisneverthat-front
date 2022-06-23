import React from 'react';
import { Link } from 'react-router-dom';

import css from './Header.module.scss';
function Header() {
  return (
    <header id={css['header']}>
      <div className={css.cont}>
        <div className={css.header_left}>
          <ul className={css.left_menu}>
            <li className={`${css.left_menu_li} ${css.header_shop}`}>
              <Link to="#" onClick={e => e.preventDefault()}>
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
              <Link to="#" onClick={e => e.preventDefault()}>
                TOP20
              </Link>
            </li>
            <li className={css.left_menu_li}>
              <Link to="#" onClick={e => e.preventDefault()}>
                FEATURES
              </Link>
            </li>
            <li className={css.left_menu_li}>
              <Link to="#" onClick={e => e.preventDefault()}>
                SEARCH
              </Link>
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
              <Link to="Login">LOGIN</Link>
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
  );
}

export default Header;
