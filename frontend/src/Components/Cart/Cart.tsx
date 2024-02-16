import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "@/components/common/ui/CartItem";
import { Link } from 'react-router-dom';
import Harry from '@/assets/harrpotter.webp'


const CartItems = [
  {
    id: 1,
    ProductName: "Harry Potter's Wand",
    description:
      'The wand that chose Harry Potter, the Boy Who Lived, when he visited Ollivanders Wand shop at 11 years of age.',
    Price: 999.99,
    quantity: 10,
    image: '@/assets/harrpotter.webp',
  },
  {
    id: 2,
    ProductName: "Hermione Granger's Wand",
    description:
      "Take home the wand of Hermione Granger, founding member of Dumbledore’s Army, best friend to Ron and Harry and often called the brightest witch of her age.",
    Price: 999.99,
    quantity: 10,
    image: '@/assets/harrpotter.webp',
  },
  {
    id: 3,
    ProductName: "Professor Dumbledore's Wand",
    description:
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmasters with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: '@/assets/harrpotter.webp',
  },
  {
    id: 4,
    ProductName: "Professor Dumbledore's Wand",
    description:
      "Take home Professor Albus Dumbledore’s famous wand, also known as the Elder Wand. Stay loyal to one of Hogwarts’ most famous Headmasters with this replica wand.",
    Price: 999.99,
    quantity: 10,
    image: '@/assets/harrpotter.webp',
  },
]

interface CartItem {
  id: number;
  ProductName: string;
  description: string;
  Price: number;
  quantity: number;
  image: string;
}
const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(CartItems);
  const [price, setPrice] = useState<number>(0);

  // useEffect(() => {
  //   const cartURL = "http://127.0.0.1:8000/cart/";
  //   const token = localStorage.getItem("accessToken");

  //   axios.get<CartItem[]>(cartURL, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(response => {
  //       setCartItems(response.data);
  //      // calculateTotal(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching cart items:', error);
  //     });
  // }, [cartItems]);

  // const handleRemoveItem = (productId: number) => {
  //   const token = localStorage.getItem("accessToken");

  //   axios.delete(`http://127.0.0.1:8000/cart/${productId}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(response => {
  //       location.reload();
  //       setCartItems(prevItems => prevItems.filter(item => item.Product_info.ProductID !== productId));
  //       console.log("Item removed successfully:", response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error removing item from cart:', error);
  //     });
  // };

  const calculateTotal = (cartItems: CartItem[]) => {
    let totalPrice = 0;

    for (const cartItem of cartItems) {
      totalPrice += cartItem.Product_info.Price * cartItem.Quantity;
    }

    totalPrice += 4.99;
    setPrice(totalPrice);
  };

  // const handleQuantityChange = (cartId: number, newQuantity: number) => {
  //   const token = localStorage.getItem("accessToken");

  //   fetch(`http://127.0.0.1:8000/cart/${cartId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({ "Quantity": newQuantity }),
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to update cart quantity');
  //       }
  //       calculateTotal(cartItems);
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log('Cart quantity updated successfully:', data);
  //       setQuantity(newQuantity);
  //     })
  //     .catch(error => {
  //       console.error('Error updating cart quantity:', error);
  //     });
  // };

  
  return (
    <div className="relative text-white bg-transparent ">
      <h1 className="mb-10 text-2xl font-bold text-center">Cart Items</h1>
      <div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0">
        {cartItems.length !== 0 ? (
          <div className="rounded-lg ">
            {cartItems.map((cart) => (
              <CartItem
                key={cart.id}
                CartID={cart.id}
                imageURL={cart.image}
                name={cart.ProductName}
                details={cart.description}
                quantity={cart.quantity}
                price={cart.Price}
                handleDelete={()=>{}}
                HandleQuantityChange={()=>{}}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-3/6">
            <h1 className="mb-4 text-3xl">Your cart is empty!</h1>
            <Link to="/" className="flex items-center gap-2 text-[#C07F00]/90 text-lg text-center">
              Continue Shopping
            </Link>
          </div>
        )}

        {cartItems.length !== 0 && (
          <div className="mt-6 h-full rounded-lg border-2 border-dotted p-6 shadow-md md:mt-0 md:w-1/3 border-[#C07F00]/90">
            <div className="flex justify-between mb-2">
              <p className="">Subtotal</p>
              <p className="">{price - 4.99}</p>
            </div>
            <div className="flex justify-between">
              <p className="">Shipping</p>
              <p>$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">{price}</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md  bg-[#C07F00]/90 py-1.5 font-medium text-blue-50 ">
              Check out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
