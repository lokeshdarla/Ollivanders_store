import React, { ReactNode } from 'react'
import useAuth from '@/hooks/useAuth'
import logo from '/assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth()
  const naviagte = useNavigate()
  if (user) {
    naviagte('/')
  }
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-transparent">
      <div className="flex-col items-center justify-center hidden w-1/2 gap-10 lg:flex">
        <img className="h-20" src={logo} alt="" />
        <img className="w-4/5" src="https://harrypottershop.co.uk/cdn/shop/files/Wand_Carousel1_1024x.jpg?v=1685615297" alt="" />
        <Link to="/" className="px-5 py-2  border border-[#C07F00]/90 text-[#C07F00]/90">
          back to home
        </Link>
      </div>

      <div className="px-2 rounded-md shadow-md w-96 lg:w-1/2 md:w-1/2">{children}</div>
    </div>
  )
}

export default AuthLayout
