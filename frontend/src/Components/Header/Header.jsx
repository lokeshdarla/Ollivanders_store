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
    <header className="px-10 shadow w-full bg-white absolute">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-1.5 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex content-end text-[#740001] text-lg gap-2">
            <Wand2 />
            <img className='h-8' src={logo} alt="" />
          </Link>
          <div className='w-3/6'>
            <SearchForm/>
          </div>
          <div className="flex items-center gap-10">
            {user ? (
              <div className="flex space-x-2 items-center">
                <Link className='flex gap-2 text-center justify-center items-center'><ShoppingBasket size={32}/><span>Cart</span></Link>
                <button
                  onClick={logout}
                >
                  <Avatar
                    imageUrl="/docs/images/people/profile-picture-5.jpg"
                    name="Harry Potter"
                    joinedDate="August 2014"
                  />
                </button>
              </div>
            ) : (
              <button
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#740001] focus:ring-4 focus:ring-[#740001] hover:bg-white hover:text-[#740001]"
                onClick={() => navigation("/login")}
              >
                Login
              </button>
            )}

          </div>
        </div>
      </nav>
    </header>
  );
}
