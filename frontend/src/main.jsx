import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/HomeLayout.jsx';
import SignUpSection from './Components/SignupSection/Signup.jsx';
import LoginSection from './Components/Login/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="signup" element={<SignUpSection />} />
          <Route path="login" element={<LoginSection />} />
          <Route path="" element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
