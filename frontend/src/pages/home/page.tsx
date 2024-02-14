import React from 'react'
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
   <div className='relative w-full'>
    <Header/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default Home;
