import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
function SignupForm() {
  const navigate = useNavigate()
  {
    const [formData, setFormData] = useState({
      email: '',
      username: '',
      password: '',
      is_admin: false,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        const response = await fetch('http://127.0.0.1:8000/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          const userData = await response.json()
          toast.success('Sign-up Successful')
          navigate('/sign-in')
          console.log('Signup successful', userData)
        } else {
          console.error('Signup failed')
        }
      } catch (error) {
        console.error('Error during signup:', error)
      }
    }

    return (
      <section className="xl:px-20 lg:mx-5 w-96 md:w-auto">
        <div className="relative flex flex-col items-center justify-center px-6 py-8 lg:py-0 ">
          <div className="w-full bg-black rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border border-[#C07F00]/90">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex-col justify-center text-center">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-[#C07F00]/90 md:text-2xl">Welcome to Ollivanders</h1>
              </div>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100">
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
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-100">
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
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-100">
                    password
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
                <button type="submit" className="w-full text-white bg-[#C07F00]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Create an account
                </button>
                <button className="w-full border text-white border-white bg-black rounded-lg py-2.5 flex text-sm items-center justify-center gap-2">
                  <span>
                    <FcGoogle />
                  </span>{' '}
                  Signup with Google
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already Have an account ?{' '}
                  <Link to="/sign-in" className="font-medium text-primary-600 hover:underline">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SignupForm
