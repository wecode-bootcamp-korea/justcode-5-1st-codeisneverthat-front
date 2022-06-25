import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Signup.module.scss';

function Signup() {
  return (
    <>
      <Header />
      <div id={css['signup']}>
        <form className={css.cont}>
          <div className={css.cnt_div}>
            <label htmlFor={css.name}>이름</label>
            <input
              id="name"
              type="text"
              placeholder="이름"
              autoComplete="off"
            />
          </div>
          <div className={css.cnt_div}>
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="text"
              placeholder="이메일"
              autoComplete="off"
            />
          </div>

          <button className={css.btn_account}>CREATE ACCOUNT</button>
          <Link to="/login" className={css.btn_goLogin}>
            로그인으로 돌아가기
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
