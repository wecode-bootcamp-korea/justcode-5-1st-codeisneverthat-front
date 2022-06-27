import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Findpassword from './Findpassword/Findpassword';
import Collections from './Collections/Collections';
import Top from './Top/Top';
import Product from './Product/Product';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/findpassword" element={<Findpassword />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/top" element={<Top />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
