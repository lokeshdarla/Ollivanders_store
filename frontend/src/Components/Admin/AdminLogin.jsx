import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert/Alert';

function AdminLogin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null);

  const loginUrl = 'http://127.0.0.1:8000/login';

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
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
        const data = await response.json();
        setAlert({ type: 'success', message: 'Login successful!' });
        localStorage.setItem('AdminToken', data.accessToken);
        window.location.reload();
      } else {
        const errorData = await response.json();
        setAlert({ type: 'error', message: 'Failed to log in. Please try again.' });
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setAlert({ type: 'error', message: error.message });
      setUsername('');
      setPassword('');
    }
  };

  return (
    <section className="">
    <div className="relative flex items-center justify-center px-6 py-[200px] mx-auto bg-transparent h-96 md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-[#740001] md:text-2xl text-center">
            Welcome Admin
          </h1>
          {alert && <Alert type={alert.type} message={alert.message} />}
          <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#740001]">
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
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#740001] ">
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
              className="w-full text-white bg-[#740001] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}

export default AdminLogin;
