import React, { useState } from 'react';
import GoogleLoginButton from './GoogleLogin';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SigninForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  interface LoginResponse {
    status: number;
    accessToken: string;
    };
  
  const handleLogin = async (username: string, password: string) => {
    const navigate = useNavigate();
  
    try {
      const loginUrl = 'http://127.0.0.1:8000/login';
  
      const response: AxiosResponse<LoginResponse> = await axios.post(
        loginUrl,
        {
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/');
      } else {
        console.error('Login failed with status:', response.status);
      }
    } catch (error: any) {
      console.error('Error during login:', error.message);
    }
  };
  

  return (
    <section className="px-20 mx-20">
        <div className="p-6 space-y-4 border border-[#C07F00]/90 md:space-y-6 sm:p-8 rounded-md">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-[#C07F00]/90  md:text-2xl text-center">
            Welcome to Ollivanders
          </h1>
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
              onClick={() => handleLogin(username, password)}
              className="w-full text-white bg-[#C07F00]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Log In
            </button>
            <GoogleLoginButton/>
            <p className="text-sm font-light text-gray-500">
              <Link to="/sign-up" className="font-medium text-primary-600 hover:text-[#C07F00]/90 hover:underline">
              New to here ?{' '}
              </Link>
            </p>
          </form>
        </div>
    
  </section>
  );
}

export default SigninForm;
