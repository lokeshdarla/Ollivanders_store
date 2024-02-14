import React from 'react';
import hero from '@/assets/hero.png'
import logo from '@/assets/images/logo.png'


const Hero: React.FC = () => {
  const imageURL: string= "https://harrypottershop.co.uk/cdn/shop/collections/Wands_2048x_68e10031-e505-4b86-994f-24ba144615ea_2048x.jpg?v=1700137199";
  const imageURL2: string="https://harrypottershop.co.uk/cdn/shop/files/Wand_Carousel1_1024x.jpg?v=1685615297"
  const imageURL3: string="https://blenderartists.org/uploads/default/original/4X/7/b/4/7b4770ef2fc4ea13a48809583e3284459867f801.jpeg"
  return (
    <>
    <div className="relative flex items-center justify-center px-10 mx-10">
    <img className="object-cover w-[50%] rounded-xl" src={hero} alt="" />
    <div className='flex flex-col items-center justify-center gap-16'>
      <img className='h-20' src={logo} alt="" />
    <p className="px-20 text-xl text-center text-white">
    Ollivanders Store is a wizard-themed e-commerce website where fans of the Harry Potter series can explore and purchase a variety of magical wizard wands.
    </p>
    </div>
  
  </div>
  </>
  
  );
};

export default Hero;
