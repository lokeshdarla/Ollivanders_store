import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import AuthLayout from './pages/auth/page';
import SigninForm from './pages/auth/Login/SigninForm';
import SignupForm from './pages/auth/SignupSection/SignupForm';
import { BackgroundAnimation } from './components/common/Background/BgAnimationa';
import Home from './pages/home/Home/HomeLayout';

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
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
