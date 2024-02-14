import React, { ReactNode } from 'react';
import { UserContext } from '@/context/userContextProvider';
import logo from '@/assets/images/logo.png'
import hero from '@/assets/hero.png'
import { Link } from 'react-router-dom';
interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-transparent">
      <div className='flex flex-col items-center justify-center w-1/2 gap-10'>
      <img className='h-20' src={logo} alt="" />
      <img className='w-4/5' src="https://harrypottershop.co.uk/cdn/shop/files/Wand_Carousel1_1024x.jpg?v=1685615297"  alt="" />
      <Link to="/" className='px-5 py-2  border border-[#C07F00]/90 text-[#C07F00]/90'>back to home</Link>
      </div>

      <div className="w-1/2 rounded-md shadow-md ">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
