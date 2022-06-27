import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Login.module.scss';

function Login() {
  return (
    <>
      <Header />
      <div id={css['login']}>
        <form className={css.cont}>
          <div className={css.cnt_div}>
            <label htmlFor={css.name}>이메일</label>
            <input
              id="name"
              type="text"
              placeholder="이메일"
              autoComplete="off"
            />
          </div>
          <div className={css.cnt_div}>
            <label htmlFor="email">비밀번호</label>
            <input
              id="email"
              type="password"
              placeholder="비밀번호"
              autoComplete="off"
            />
          </div>

          <button className={css.btn_black}>LOGIN</button>
          <p className={css.text}>
            이메일, 비밀번호만 설정 후 회원가입 하시면 상품 결제, 주문 확인 및
            배송 조회, 적립금 혜택 등 더욱 편리하게 스토어를 이용하실 수
            있습니다.
          </p>
          <Link to="/signup" className={css.btn_goLink}>
            회원가입 하기
          </Link>
          <button className={css.btn_goLink}>비밀번호 찾기</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
