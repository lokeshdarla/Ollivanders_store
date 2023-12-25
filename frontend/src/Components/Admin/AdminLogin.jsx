import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert/Alert';

function AdminLogin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const loginUrl = 'http://127.0.0.1:8000/login';

  const handleLogin = async () => {
    try {
      // Check if email and password are not empty
      if (!username.trim() || !password.trim()) {
        return;
      }

      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        // Handle successful login
        const data = await response.json();
        setAlert({ type: 'success', message: 'Login successful!' });

        // // Store JWT token in local storage
        localStorage.setItem('AdminToken', data.accessToken);
        setLoggedIn(true);

        // Navigate to '/user' after successful login
        window.location.reload();
      } else {
        // Handle login error
        const errorData = await response.json();
        setAlert({ type: 'error', message: 'Failed to log in. Please try again.' });

        // Clear input fields on error
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setAlert({ type: 'error', message: error.message });

      // Clear input fields on error
      setUsername('');
      setPassword('');
    }
  };

  return (
    <section className="">
    <div className=" h-96 flex relative items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-transparent">
      <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-[#740001] md:text-2xl text-center">
            Welcome Admin
          </h1>
          {alert && <Alert type={alert.type} message={alert.message} />}
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                Your Username
              </label>
              <input
                 type="password"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="usernameSample"
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
              className="w-full text-white bg-[#740001] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Log In
            </button>
            <p className="text-sm font-light text-gray-500">
              Create New account?{' '}
              <Link to="/signup" className="font-medium text-primary-600 hover:underline">
                here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}

export default AdminLogin;
