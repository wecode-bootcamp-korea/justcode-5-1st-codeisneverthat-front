import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import css from './Login.module.scss';
import { UserContext } from '../../store/UserStore';
import BASE_URL from '/src/config';

function Login() {
  const context = useContext(UserContext);
  const { token, setToken } = context;

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleInputsByName = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = event => {
    event.preventDefault();
    fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    })
      .then(response => {
        if (response.status === 201) {
          navigate('/');
        } else {
          alert('로그인/비밀번호를 확인해주세요');
        }
        return response.json();
      })
      .then(result => {
        // localStorage.getItem("token");

        if (result.message.includes('SUCCESS')) {
          localStorage.setItem('token', result.token);
          setToken(result.token);
        } else {
          localStorage.setItem('token', '');
        }
        // console.log(localStorage);
      });

    // t@t.kr
    // testtest
  };

  return (
    <div id={css['login']}>
      <form className={css.cont}>
        <div className={css.cnt_div}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="이메일"
            // autoComplete="off"
            onChange={handleInputsByName}
          />
        </div>
        <div className={css.cnt_div}>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            // autoComplete="off"
            onChange={handleInputsByName}
          />
        </div>

        <button className={css.btn_black} onClick={handleLogin}>
          LOGIN
        </button>
        <p className={css.text}>
          이메일, 비밀번호만 설정 후 회원가입 하시면 상품 결제, 주문 확인 및
          배송 조회, 적립금 혜택 등 더욱 편리하게 스토어를 이용하실 수 있습니다.
        </p>
        <Link to="/signup" className={css.btn_goLink}>
          회원가입 하기
        </Link>
      </form>
    </div>
  );
}

export default Login;
