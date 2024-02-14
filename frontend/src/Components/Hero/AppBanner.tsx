import React from 'react';

const AppBanner: React.FC = () => {
  return (
    <div className="container relative px-6 py-16 mx-auto text-center ">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-[#C07F00]/90 dark:text-white lg:text-4xl">
          Personalised Wands
        </h1>
        <p className="mt-6 text-gray-200 dark:text-gray-300">
        Add your personal touch to one of our replica wands with our brand new wand engraving service! Create a truly magical and one-of-a-kind wand, unique to you.
        </p>
        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-[#C07F00]/90 rounded-lg hover:bg-[#C07F00]/85 lg:mx-0 lg:w-auto focus:outline-none">
          Shop now
        </button>
        <p className="mt-3 text-sm text-gray-400 hover:text-[#C07F00]/90">No credit card required</p>
      </div>

      <div className="flex justify-center mt-10">
        <img
          className="object-cover w-full h-96 rounded-xl lg:w-4/5"
          src="https://harrypottershop.co.uk/cdn/shop/files/Wand_Carousel1_1024x.jpg?v=1685615297"
          alt="App Banner"
        />
      </div>
    </div>
  );
};

export default AppBanner;
