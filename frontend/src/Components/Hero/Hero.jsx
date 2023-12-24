import React from 'react';
import hero from '../assets/hero.jpeg'
import logo from "../assets/logo.png"
const Hero = () => {
  return (
    <>
    <section className="h-96 w-full bg-center flex items-center justify-center bg-no-repeat bg-cover bg-blend-multiply" style={{ backgroundImage: `url('${hero}')` }}>
  <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-56 flex flex-col items-center">
    <img className="h-20" src={logo} alt="" />
    <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 text-justify">
      Ollivanders Store is a wizard-themed e-commerce website where fans of the Harry Potter series can explore and purchase a variety of magical wizard wands.
    </p>
  </div>
</section>

    </>
  );
};

export default Hero;
