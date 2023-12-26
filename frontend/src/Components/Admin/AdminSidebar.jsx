import React from 'react';
import { IoReorderFour } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { GiFairyWand } from "react-icons/gi";
import { Link } from 'react-router-dom';
import AdminInfo from './AdminInfo';
import ProductPage from './CRUD';

const Sidebar = () => {
  const {admin,logout}=AdminInfo();
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium text-white text-xl gap-2">
            <li>
            <Link href="/products" className='flex justify-start items-center gap-2'> <span><GiFairyWand /></span> Products</Link>
            </li>
            <li>
            <Link href="/orders" className='flex justify-start items-center gap-2'> <span><IoReorderFour /></span> Orders</Link>
            </li>
            <li>
            <button onClick={()=>logout()} className='flex justify-start items-center gap-2'> <span><MdAccountCircle /></span> Logout</button>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4">
          <ProductPage/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
