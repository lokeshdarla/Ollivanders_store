import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert/Alert';

function SignUpSection(){ {
  const [formData, setFormData] = useState({
    email:'',
    username: '',
    password: '',
  });

  const [alert, setAlert] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Signup successful
        const userData = await response.json();
        console.log('Signup successful', userData);
        setAlert({ type: 'success', message: 'Account created successfully!' });
      } else {
        console.error('Signup failed');
        setAlert({ type: 'error', message: 'Failed to create account. Please try again.' });
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setAlert({ type: 'error', message: 'Error during signup. Please try again.' });
    }
  };

    return (
      <section className="">
        <div className="flex flex-col relative items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className='flex-col justify-center text-center'> 
              <h1 className='text-xl font-bold leading-tight tracking-tight text-[#C07F00]/90 md:text-2xl'>
                Welcome to Ollivanders
              </h1>
              <h1 className=" font-bold leading-tight tracking-tight text-gray-900">
                Create an account
              </h1>
              </div>
             
              {alert && <Alert type={alert.type} message={alert.message} />}
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSignUp}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#C07F00]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already Have an account ?{' '}
                  <Link to="/login" className="font-medium text-primary-600 hover:underline">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return <SignUpForm />;
}

export default SignUpSection;
