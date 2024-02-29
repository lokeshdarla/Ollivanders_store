import React from 'react'
import hero from '/assets/hero.png'
import logo from '/assets/images/logo.png'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center gap-10 mx-10 mt-10 lg:px-10 lg:flex-row">
        <img className="object-cover w-96 lg:w-[50%] rounded-xl" src={hero} alt="" />
        <div className="flex flex-col items-center justify-center gap-5">
          <img className="h-20" src={logo} alt="" />
          <p className="text-lg text-center text-white md:text-xl lg:px-20 md:px-20">
            Ollivanders Store is a wizard-themed e-commerce website where fans of the Harry Potter series can explore and purchase a variety of magical wizard wands.
          </p>
          <Link
            to="/product"
            className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-[#C07F00]/90 rounded-lg hover:bg-[#C07F00]/85 lg:mx-0 lg:w-auto focus:outline-none"
          >
            Shop now
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero
