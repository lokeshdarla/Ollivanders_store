import React from 'react';

const AppBanner: React.FC = () => {
  return (
    <div className="container relative px-6 py-16 mx-auto text-center ">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-[#C07F00]/90 dark:text-white lg:text-4xl">
          Building Your Next App with our Awesome components
        </h1>
        <p className="mt-6 text-gray-200 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
        </p>
        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-[#C07F00]/90 rounded-lg hover:bg-[#C07F00]/85 lg:mx-0 lg:w-auto focus:outline-none">
          Start Shopping
        </button>
        <p className="mt-3 text-sm text-gray-400 hover:text-[#C07F00]/90">No credit card required</p>
      </div>

      <div className="flex justify-center mt-10">
        <img
          className="object-cover w-full h-96 rounded-xl lg:w-4/5"
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt="App Banner"
        />
      </div>
    </div>
  );
};

export default AppBanner;
