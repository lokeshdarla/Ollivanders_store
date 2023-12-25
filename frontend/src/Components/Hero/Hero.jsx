import React from 'react';
import logo from "../assets/logo.png"
import { FaHatWizard } from "react-icons/fa";
const Hero = () => {
  return (
    <>
    <section className=" bg-transparent relative " style={{ fontFamily: 'Metal-Mania' }}>
      <div className=" px-4 mx-auto max-w-screen-xl py-24 lg:py-56 flex flex-col items-center justify-center gap-10 h-96 text-white">
      
        <img className="h-20 transform transition-transform hover:scale-105" src={logo} alt="" />
        <p className="mb-8 text-lg  text-white lg:text-xl sm:px-16 lg:px-48 text-justify font-light">
          Ollivanders Store is a wizard-themed e-commerce website where fans of the Harry Potter series can explore and purchase a variety of magical wizard wands.
        </p>
      </div>
    </section>

    </>
  );
};

export default Hero;
