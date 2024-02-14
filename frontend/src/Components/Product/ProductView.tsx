// ProductView.js
import React from 'react';
import harry from '@/assets/Harry.webp'
import TopProduct from './TopProduct';



const Product={
    id: 1,
    ProductName: "Harry Potter's Wand",
    description:
      'The wand that chose Harry Potter, the Boy Who Lived, when he visited Ollivanders Wand shop at 11 years of age.',
    Price: 999.99,
    quantity: 10,
    image: harry,
  }

const ProductView = () => {
 

  return (
    <>

    <div className='relative flex items-center justify-center h-2/3'>
    <div className='flex items-center justify-center w-1/2'>
      <img className='transition-transform transform hover:scale-105' src={Product.image} alt="" />
    </div>
    <div className='flex flex-col items-start justify-center w-1/2 gap-5 px-20 text-white'>
      <h2 className='text-4xl text-[#C07F00]/90 '>{Product.ProductName}</h2>
      <div className='w-full border border-dotted border-[#C07F00]/90'></div>
      <h3 className='text-2xl font-bold'>Rs: {Product.Price} INR</h3>
      <div className='w-full border border-dotted border-[#C07F00]/90'></div>
      <div className='space-y-5'>
      <p className='font-thin '>{Product.description}</p>
      <div className='flex space-x-10'>
      <form className="">
      <label htmlFor="counter-input" className="block mb-2 text-md font-medium text-[#C07F00]/90 dark:text-white">
        Choose quantity:
      </label>
      <div className="relative flex items-center">
        <button
          type="button"
          id="decrement-button"
          data-input-counter-decrement="counter-input"
          className="inline-flex items-center justify-center w-5 h-5 p-4 text-xl bg-[#C07F00]/90 border rounded-full"
        >
       -
        </button>
        <input
          type="text"
          id="counter-input"
          data-input-counter
          className="flex-shrink-0 text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
          placeholder=""
          value="12"
          required
        />
        <button
          type="button"
          id="increment-button"
          data-input-counter-increment="counter-input"
          className="inline-flex items-center justify-center w-5 h-5 p-4 text-xl  bg-[#C07F00]/90 border rounded-full"
        >+
        </button>
      </div>
    </form>
      <button className='px-3 text-lg py-0 border border-[#C07F00]/90 text-[#C07F00]/90 '>Add to Cart</button>
      </div>
     </div>
   
    </div>
    </div>
    <div className='flex flex-col space-y-4'>
      <h1 className='px-16 text-white'>Customers also watch these</h1>
    <TopProduct/>
    </div>

    </>
  );
};

export default ProductView;
