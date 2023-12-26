import React, { useState } from "react";
import Harry from "../assets/Harry.webp"
import Hermione from "../assets/Hermione2.webp"
import { v4 as uuid } from "uuid";
import { Trash } from 'lucide-react';

const CartItems = [
  {
    id: uuid(),
    productName: "Harry Potter's Wand",
    description: 'The wand that chose Harry Potter, the Boy Who Lived, when he visited Ollivanders Wand shop at 11 years of age.',
    price: 999.99,
    quantity: 10,
    image: Harry,
  },
  {
    id: uuid(),
    productName: "Hermione Granger's Wand",
    description: "Take home the wand of Hermione Granger, founding member of Dumbledore’s Army, best friend to Ron and Harry and often called the brightest witch of her age.",
    price: 999.99,
    quantity: 10,
    image: Hermione,
  },
];

const CartItem = ({ image, name, details, quantity, price, handleQuantityChange, deleteProduct }) => {
  return (
    <div className="border-2 border-dotted border-[#C07F00]/90 rounded-lg p-6 mb-6 flex items-center gap-5">
      <div className="flex gap-10 items-center ">
      <div className="rounded-full border border-dotted border-white overflow-hidden h-40 w-40">
        <img
          src={image}
          alt="product-image"
          className="object-cover w-full h-full"
        />
      </div>
      </div>


      <div className="flex-col items-center">
         <div className="flex flex-col items-start mb-10">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-xs">{details}</p>
        </div>
        <div className="flex justify-end gap-5 items-center">
            <label htmlFor="units"> Quantity</label>
            <input
            id="units"
              className="h-8 w-16 text-center text-xs outline-none text-white bg-transparent"
              type="number"
              value="5"
              min="1"
              onChange={(e) => handleQuantityChange(e.target.value)}
            />

              <p className="text-sm">${price.toFixed(2)}</p>
            <button
              onClick={() => deleteProduct()}
              className="p-2 decoration-none text-white bg-red-700 hover:bg-red-800  rounded-lg"
            >
              <Trash />
            </button>
          </div>
      </div>
  
    </div>
  );
};


const CartPage = () => {
  const [cartItems, setCartItems] = useState(CartItems);

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Calculate subtotal dynamically
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="h-screen bg-transparent text-white relative">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg ">
          {cartItems.map((product) => (
            <CartItem
              key={product.id}
              image={product.image}
              name={product.productName}
              details={product.description}
              initialQuantity={product.quantity}
              price={product.price}
              onRemove={() => handleRemoveItem(product.id)}
            />
          ))}
        </div>

        {/* Subtotal */}
        <div className="mt-6 h-full rounded-lg border-2 border-dotted p-6 shadow-md md:mt-0 md:w-1/3  border-[#C07F00]/90">
          <div className="mb-2 flex justify-between">
            <p className="">Subtotal</p>
            <p className="">${calculateSubtotal().toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="">Shipping</p>
            <p>$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${(calculateSubtotal() + 4.99).toFixed(2)} </p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md  bg-[#C07F00]/90 py-1.5 font-medium text-blue-50 ">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
