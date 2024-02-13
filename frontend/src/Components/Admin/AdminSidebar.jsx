import React from 'react';
import ProductPage from './CRUD';
import Navbar from './Navbar';

const Sidebar = () => {
  return (
    <div className='flex items-start justify-center'>
     <Navbar/>
      <div className="p-4 sm:ml-64">
        <div className="p-4">
          <ProductPage/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
