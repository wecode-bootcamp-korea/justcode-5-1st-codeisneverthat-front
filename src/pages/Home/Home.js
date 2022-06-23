import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Home.module.scss';

function Home() {
  return (
    <>
      <Header />
      <div className={css.container}>Home</div>
      <Footer />
    </>
  );
}

export default Home;
