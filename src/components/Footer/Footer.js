import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

import css from './Footer.module.scss';

function Footer() {
  return (
    <footer id={css['footer']}>
      <div className={css.cont}>
        <div className={css.footer_icons}>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <ul className={css.top}>
          <li>
            <Link to="#" onClick={e => e.preventDefault()}>
              newsletter
            </Link>
          </li>
          <li>
            <Link to="#" onClick={e => e.preventDefault()}>
              stores
            </Link>
          </li>
          <li>
            <Link to="#" onClick={e => e.preventDefault()}>
              contact
            </Link>
          </li>
          <li>
            <Link to="#" onClick={e => e.preventDefault()}>
              contact
            </Link>
          </li>
          <li>
            <Link to="#" onClick={e => e.preventDefault()}>
              Shipping&Returns
            </Link>
          </li>
          <li>
            <Link to="#" onClick={e => e.preventDefault()}>
              PRIVACY POLICY
            </Link>
          </li>
          <li>
            <Link to="#" onClick={e => e.preventDefault()}>
              TERMS&CONDITIONS
            </Link>
          </li>
          <li>
            <Link to="#" onClick={e => e.preventDefault()}>
              TERMS&CONDITIONS
            </Link>
          </li>
        </ul>
        <p className={css.copyright}>&copy; 2022 codeisneverthat®</p>
      </div>
      <ul className={css.fotter_btm}>
        <li>저스트코드</li>
        <li>서울특별시 강남구 테헤란로 427, 위워크타워</li>
        <li>사업자번호 : 530-81-01310</li>
        <li>학원 등록 번호 : 제 13227 호</li>
        <li>고객센터 : 010-7365-4553</li>
      </ul>
    </footer>
  );
}

export default Footer;
