import React, { useState } from "react";
import axios from "axios";
import CartItem from "../UI/CartItem";
import { useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartURL = "http://127.0.0.1:8000/cart/";
    const token = localStorage.getItem("accessToken");

    axios.get(cartURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setCartItems(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  // Function to handle the removal of an item from the cart
  const handleRemoveItem = (productId) => {
    const token = localStorage.getItem("accessToken");

    axios.delete(`http://127.0.0.1:8000/cart/${productId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        // Update the cart items after successful removal
        setCartItems(prevItems => prevItems.filter(item => item.product_info.ProductID !== productId));
        console.log("Item removed successfully:", response.data);
      })
      .catch(error => {
        console.error('Error removing item from cart:', error);
      });
  };

  // Calculate subtotal dynamically


  return (
    <div className="h-screen bg-transparent text-white relative">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg">
          {cartItems.map((cart) => (
            <CartItem
              key={cart.CartID}
              imageURL={cart.Product_info.image.Image}
              name={cart.Product_info.ProductName}
              details={cart.Product_info.Description}
              initialQuantity={cart.Quantity}
              price={cart.Product_info.Price}
            />
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border-2 border-dotted p-6 shadow-md md:mt-0 md:w-1/3  border-[#C07F00]/90">
          <div className="mb-2 flex justify-between">
            <p className="">Subtotal</p>
            <p className="">999</p>
          </div>
          <div className="flex justify-between">
            <p className="">Shipping</p>
            <p>$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">99999</p>
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
