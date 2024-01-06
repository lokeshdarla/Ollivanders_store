import React, { useState } from 'react';
import { Trash } from 'lucide-react';



const CartItem = ({ CartID, imageURL, name, details, quantity, price, handleDelete, HandleQuantityChange }) => {
  const [Quantity, setQuantity] = useState(quantity);

  return (
    <div className="border-2 border-dotted border-[#C07F00]/90 rounded-lg p-6 mb-6 flex items-center gap-5">
      <div className="flex gap-10 items-center ">
        <div className="rounded-full border border-dotted border-white overflow-hidden h-40 w-40">
          <img
            src={`data:image/jpeg;base64,${imageURL}`}
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
          <select
            id="units"
            className="h-8 w-16 text-center text-xs outline-none text-white bg-transparent"
            value={Quantity}
            onChange={(e) => {
              HandleQuantityChange(CartID, e.target.value)
              setQuantity(e.target.value)
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>

          <p className="text-sm">${price}</p>
          <button
            onClick={() => handleDelete(CartID)}
            className="p-2 decoration-none text-white bg-red-700 hover:bg-red-800  rounded-lg"
          >
            <Trash />
          </button>
        </div>
      </div>

    </div>
  );
};

export default CartItem;