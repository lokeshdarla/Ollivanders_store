import React from 'react';


const Hero: React.FC = () => {
  const imageURL: string= "https://harrypottershop.co.uk/cdn/shop/collections/Wands_2048x_68e10031-e505-4b86-994f-24ba144615ea_2048x.jpg?v=1700137199";
  const imageURL2: string="https://harrypottershop.co.uk/cdn/shop/files/Wand_Carousel1_1024x.jpg?v=1685615297"
  const imageURL3: string="https://blenderartists.org/uploads/default/original/4X/7/b/4/7b4770ef2fc4ea13a48809583e3284459867f801.jpeg"
  return (
    <>
      <section className="relative bg-transparent " style={{ fontFamily: 'Metal-Mania' }}>
        <div className="flex flex-col items-center justify-center max-w-screen-xl gap-10 px-4 mx-auto text-white">
          
        <div className="relative group">
      <img className="transition-transform transform" src={imageURL} alt="" />
      <div className="absolute opacity-100 inset-20 bg-gradient-to-white from-gray-50 to-black"></div>
    </div>
          <p className="mb-8 font-light text-justify text-white lg:text-2xl sm:px-16 lg:px-48">
            Ollivanders Store is a wizard-themed e-commerce website where fans of the Harry Potter series can explore and purchase a variety of magical wizard wands.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
