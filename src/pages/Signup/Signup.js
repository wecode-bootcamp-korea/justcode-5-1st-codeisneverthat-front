import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import css from './Signup.module.scss';

function Signup() {
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

  const handleSignUp = event => {
    event.preventDefault();
    fetch('http://localhost:10010/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    })
      .then(res => {
        if (res.status === 201) {
          alert('회원가입에 성공하였습니다.');
          navigate('/Login');
        }
        return res.json();
      })
      .then(result => console.log(result));
  };

  return (
    <div id={css['signup']}>
      <form className={css.cont}>
        <div className={css.cnt_div}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="이메일"
            autoComplete="off"
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
            autoComplete="off"
            onChange={handleInputsByName}
          />
        </div>

        <button className={css.btn_black} onClick={handleSignUp}>
          CREATE ACCOUNT
        </button>
        <Link to="/login" className={css.btn_goLink}>
          로그인으로 돌아가기
        </Link>
      </form>
    </div>
  );
}

export default Signup;
