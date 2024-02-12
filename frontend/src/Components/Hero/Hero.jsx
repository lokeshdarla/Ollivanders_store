import React from 'react';
import logo from "../assets/logo.png"
const Hero = () => {
  return (
    <>
    <section className="relative bg-transparent " style={{ fontFamily: 'Metal-Mania' }}>
      <div className="flex flex-col items-center justify-center max-w-screen-xl gap-10 px-4 py-24 mx-auto text-white lg:py-56 h-96">
      
        <img className="h-10 transition-transform transform lg:h-20 hover:scale-105" src={logo} alt="" />
        <p className="mb-8 font-light text-justify text-white lg:text-2xl sm:px-16 lg:px-48">
          Ollivanders Store is a wizard-themed e-commerce website where fans of the Harry Potter series can explore and purchase a variety of magical wizard wands.
        </p>
      </div>
    </section>

    </>
  );
};

export default Hero;
