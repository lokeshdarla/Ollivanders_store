import React, { useEffect, useState } from 'react'
import GoogleLoginButton from './GoogleLogin'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { LoginForm } from '@/constants'
import { handleLogin } from '@/services/auth'

function SigninForm() {
  const navigate = useNavigate()
  const [user, setUser] = useState<LoginForm>({
    username: '',
    password: '',
  })

  const handleSubmit = async () => {
    try {
      await handleLogin(user)
      navigate('/')
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  return (
    <section className=" xl:px-20 lg:mx-5">
      <div className="p-6 space-y-4 border border-[#C07F00]/90 md:space-y-6 sm:p-8 rounded-md">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-[#C07F00]/90  md:text-2xl text-center">Welcome to Ollivanders</h1>
        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">
              Wizard Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Enter your wizard name"
              value={user.username}
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  username: e.target.value,
                }))
              }
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
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
            />
          </div>
          <button type="submit" className="w-full text-white bg-[#C07F00]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Log In
          </button>
          <GoogleLoginButton />
          <p className="text-sm font-light text-gray-500">
            <Link to="/sign-up" className="font-medium text-primary-600 hover:text-[#C07F00]/90 hover:underline">
              New to here ?{' '}
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default SigninForm
