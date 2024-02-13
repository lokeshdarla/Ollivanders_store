import React, { ReactNode } from 'react';
import { UserContext } from '@/context/userContextProvider';
import diagonalley from "@/assets/diagonalley.jpg"
interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-transparent">
      <img src="https://storage.googleapis.com/dream-machines-output/ef4fc183-4b25-4679-8360-020a53d8c511/0_0.png" className='object-cover w-1/2 h-screen' alt="" />
      <div className="w-1/2 rounded-md shadow-md ">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
