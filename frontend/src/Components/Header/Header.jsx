import React from 'react';
import { Wand2 } from 'lucide-react';
import SearchForm from '../UI/SearchForm';
import { Link } from 'react-router-dom';
import UserInfo from '../Login/FetchUser';
import { useNavigate } from 'react-router-dom';
import { ShoppingBasket } from 'lucide-react';
import Avatar from '../UI/Avatar';
import logo from "../assets/logo.png";

export default function Header() {
  const { user, logout } = UserInfo();
  const navigation = useNavigate();
  return (
    <header className="p-10 shadow w-full sticky bg-transparent">
      <nav className=" border-gray-200 px-4 lg:px-6 py-1.5">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex content-end text-[#C07F00]/90 text-lg gap-2">
            <Wand2 />
            <img className='h-8' src={logo} alt="" />
          </Link>
          {user ? (
            <div className="flex space-x-2 gap-10 ">
              <Link to="/cart" className='flex gap-2 text-center justify-center items-center text-white hover:text-[#C07F00]/90'><ShoppingBasket size={32} /><span>Cart</span></Link>
              <button
                onClick={logout}
              >
                <Avatar
                  imageUrl="/docs/images/people/profile-picture-5.jpg"
                  name={user.username}
                  joinedDate="August 2014"
                />
              </button>
            </div>
          ) : (
            <div className='flex items-center gap-10'>
              <button
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-[#C07F00]/90 hover:bg-[#C07F00]"
                onClick={() => navigation("/signup")}
              >
                signup
              </button>
              <button
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-[#C07F00]/90 hover:bg-[#C07F00]"
                onClick={() => navigation("/login")}
              >
                Login
              </button>
            </div>
          )}
        </div>

      </nav>
    </header>
  );
}
