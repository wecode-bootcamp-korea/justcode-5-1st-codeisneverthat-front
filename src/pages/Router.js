import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import UserStore from '../store/UserStore';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Findpassword from './Findpassword/Findpassword';
import Collections from './Collections/Collections';
import Top from './Top/Top';
import Product from './Product/Product';
import Cart from './Cart/Cart';

function Router() {
  return (
    <BrowserRouter>
      <UserStore>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/findpassword" element={<Findpassword />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/top" element={<Top />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </UserStore>
    </BrowserRouter>
  );
}

export default Router;
