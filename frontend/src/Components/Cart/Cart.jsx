// Import any necessary styles or components
import HarryImage from "../assets/Harry.webp";
import HermioneImage from "../assets/Hermione2.webp";
import DumbledoreImage from "../assets/dumledore.webp";
import React from "react";
// Define the component
const CartPage = () => {
  return (
    <div className="h-screen bg-transparent text-white relative">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <CartItem
            image={HarryImage}
            name="Nike Air Max 2019"
            details="36EU - 4US"
            quantity="2"
            price="259.000 ₭"
          />
          <CartItem
            image={HermioneImage}
            name="Nike Air Max 2019"
            details="36EU - 4US"
            quantity="2"
            price="259.000 ₭"
          />
        </div>

        {/* Subtotal */}
        <div className="mt-6 h-full rounded-lg border  p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="">Subtotal</p>
            <p className="">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="">Shipping</p>
            <p>$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-[#740001] py-1.5 font-medium text-blue-50 ">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

// CartItem component
const CartItem = ({ image, name, details, quantity, price }) => {
  return (
    <div className="justify-between mb-6 rounded-lg  p-6 shadow-md sm:flex sm:justify-start items-center">
      <img src={image} alt="product-image" className="w-full rounded-lg sm:w-40 m-10 h-20 object-cover" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="mt-1 text-xs">{details}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100"> - </span>
            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={quantity} min="1" />
            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">{price}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
