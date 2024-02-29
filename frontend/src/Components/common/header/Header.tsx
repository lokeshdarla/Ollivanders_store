import React, { useState } from 'react'
import { Wand2 } from 'lucide-react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCartSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import Avatar from '@/components/common/ui/Avatar'
import logo from '/assets/images/logo.png'
import { FaArrowRight } from 'react-icons/fa'

export default function Header() {
  const { user, logout } = useAuth()
  const navigation = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="relative w-full p-4 bg-transparent shadow-lg lg:p-10">
      <nav className="border-gray-200 px-4 lg:px-6 py-1.5">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link to="/" className="flex content-end text-[#C07F00]/90 text-lg gap-2">
              <Wand2 />
              <img className="h-8" src={logo} alt="Logo" />
            </Link>
            <div className="transition-transform duration-300 transform lg:hidden">
              <button onClick={toggleMobileMenu}>
                <div className="text-[#C07F00]/90 text-xl">
                  <GiHamburgerMenu />
                </div>
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="relative z-10">
              <div className="fixed right-0 z-10 flex flex-col items-start justify-start h-screen gap-6 p-4 overflow-y-auto bg-black top-4 lg:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-3 bg-[#C07F00] text-white rounded-full">
                  <FaArrowRight />
                </button>

                {user ? (
                  <div className="flex flex-col gap-5 space-x-2 lg:gap-10 lg:flex-row">
                    <Link to="/cart" className="flex gap-2 text-center justify-start items-center text-white hover:text-[#C07F00]/90" onClick={closeMobileMenu}>
                      <IoCartSharp size={28} />
                      <span>Cart</span>
                    </Link>
                    <button onClick={logout}>
                      <Avatar name={user.name} />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center mt-4 space-x-4 lg:mt-0 lg:flex-row">
                    <Link to="/cart" className="flex gap-2 text-center justify-center items-center text-white hover:text-[#C07F00]/90" onClick={closeMobileMenu}>
                      <IoCartSharp size={28} />
                      <span>Cart</span>
                    </Link>
                    <button
                      className="inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-white bg-[#C07F00]/90 hover:bg-[#C07F00] rounded-lg"
                      onClick={() => {
                        navigation('/sign-in')
                        closeMobileMenu()
                      }}
                    >
                      Login
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className={`lg:flex hidden items-center gap-4 transition-all duration-300`}>
            {user ? (
              <div className="flex flex-col gap-4 space-x-2 lg:gap-10 lg:flex-row">
                <Link to="/cart" className="flex gap-2 text-center justify-center items-center text-white hover:text-[#C07F00]/90" onClick={closeMobileMenu}>
                  <IoCartSharp size={28} />
                  <span>Cart</span>
                </Link>
                <button onClick={logout}>
                  <Avatar name={user.name} />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center mt-4 space-x-4 lg:mt-0 lg:flex-row">
                <Link to="/cart" className="flex gap-2 text-center justify-center items-center text-white hover:text-[#C07F00]/90" onClick={closeMobileMenu}>
                  <IoCartSharp size={28} />
                  <span>Cart</span>
                </Link>
                <button
                  className="inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-white bg-[#C07F00]/90 hover:bg-[#C07F00] rounded-lg"
                  onClick={() => {
                    navigation('/sign-in')
                    closeMobileMenu()
                  }}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
