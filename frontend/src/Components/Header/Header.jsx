import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ShoppingBasket } from 'lucide-react';
import Avatar from '../UI/Avatar';
import logo from "../assets/logo.png";
import { IoCartSharp } from "react-icons/io5";

export default function Header() {
  const { user, logout, } = useAuth();
  const navigation = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="p-4 lg:p-10 shadow w-full sticky bg-transparent">
      <nav className="border-gray-200 px-4 lg:px-6 py-1.5">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className='flex items-center justify-between w-full lg:w-auto'>
            <Link to="/" className="flex content-end text-[#C07F00]/90 text-lg gap-2">
              <Wand2 />
              <img className='h-8' src={logo} alt="" />
            </Link>
            <div className="lg:hidden transition-transform duration-300 transform">
              <button onClick={toggleMobileMenu}>
                <div className='text-[#C07F00]/90 text-xl'><GiHamburgerMenu /></div>
              </button>
            </div>
          </div>
          <div className={`lg:flex items-center gap-4 transition-all duration-300 ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          {user ? (
            <div className="flex space-x-2 gap-4 lg:gap-10 flex-col lg:flex-row">
              <Link to="/cart" className='flex gap-2 text-center justify-center items-center text-white hover:text-[#C07F00]/90' onClick={closeMobileMenu}>
                <IoCartSharp size={28}/><span>Cart</span></Link>
              <button onClick={logout}>
                <Avatar
                  imageUrl={user.picture}
                  name={user.name}
                />
              </button>
            </div>
          ) : (
            <div className='flex items-center gap-2 lg:gap-4 flex-col lg:flex-row mt-10 lg:mt-0'>
              <button
                className="inline-flex justify-center items-center py-2 w-32 text-base font-medium text-center text-white bg-[#C07F00]/90 hover:bg-[#C07F00] rounded-lg"
                onClick={() => { navigation("/signup"); closeMobileMenu(); }}
              >
                Sign Up
              </button>
              <button
                className="inline-flex justify-center items-center py-2 w-32 text-base font-medium text-center text-white bg-[#C07F00]/90 hover:bg-[#C07F00] rounded-lg"
                onClick={() => { navigation("/login"); closeMobileMenu(); }}
              >
                Login
              </button>
            </div>
          )}
        </div>

        </div>
      </nav>
    </header>
  );
}
