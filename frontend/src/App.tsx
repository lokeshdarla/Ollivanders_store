import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import AuthLayout from './pages/auth/page';
import SigninForm from './pages/auth/Login/SigninForm';
import SignupForm from './pages/auth/SignupSection/SignupForm';
import { BackgroundAnimation } from './components/common/Background/BgAnimationa';
import HomeLayout from '@/pages/home/Home/HomeLayout';
import Home from '@/pages/home/page';
import ProductPage from '@/pages/product/page';
import ProductView from './components/Product/ProductView';
import CartPage from './components/cart/Cart';

const App = () => {
  return (
    <main className="absolute flex items-center justify-center w-full">
      <BackgroundAnimation />
      <Routes>
        {/* Public routes */}
        <Route
          path="/sign-in"
          element={
            <AuthLayout>
              <SigninForm />
            </AuthLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <AuthLayout>
              <SignupForm />
            </AuthLayout>
          }
        />
       <Route path="/" element={<Home />}>
        <Route path="/" element={<HomeLayout/>} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductView/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Route>
      </Routes>
    </main>
  );
};

export default App;
