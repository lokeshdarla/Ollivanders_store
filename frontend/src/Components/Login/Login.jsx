import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert/Alert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc'

function LoginSection() {
  const navigation = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null);

  const loginUrl = 'http://127.0.0.1:8000/login';

  const handleGoogleLogin = () => {
    const scopes = ['openid', 'profile', 'email', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'];

    const params = new URLSearchParams({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
        access_type: 'offline',
        response_type: 'code',
        scope: scopes.join(' '),
        state: new URLSearchParams({
            redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
        }).toString(),
    });

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
};



  const handleLogin = async () => {
    try {

      const response = await axios.post(
        loginUrl,
        {
          username: username,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      

      if (response.status === 200) {
        const data = await response.data;
        setAlert({ type: 'success', message: 'Login successful!' });
        localStorage.setItem('accessToken', data.accessToken);
        navigation('/');
      } else {
        const errorData = await response.data;
        setAlert({ type: 'error', message: 'Failed to log in. Please try again.' });
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setAlert({ type: 'error', message: error.message });

      setUsername('');
      setPassword('');    }
  };

  return (
    <section className="">
    <div className=" flex relative items-center justify-center px-6 py-8 mx-auto lg:py-0 bg-transparent">
      <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border border-[#C07F00]/90">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-[#C07F00]/90  md:text-2xl text-center">
            Welcome to Ollivanders
          </h1>
          {alert && <Alert type={alert.type} message={alert.message} />}
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Wizard Name
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder=""
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full text-white bg-[#C07F00]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Log In
            </button>
            <button 
            onClick={handleGoogleLogin}
            className='w-full border text-white border-white bg-black rounded-lg py-2.5 flex text-sm items-center justify-center gap-2'>
                 <span><FcGoogle/></span>Login with Google
                </button>
            <p className="text-sm font-light text-gray-500">
              <Link to="/signup" className="font-medium text-primary-600 hover:text-[#C07F00]/90 hover:underline">
              New to here ?{' '}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}

export default LoginSection;
