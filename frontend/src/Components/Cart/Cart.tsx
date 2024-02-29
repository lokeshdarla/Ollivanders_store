import React, { useState, useEffect } from 'react'
import CartItem from '@/components/common/ui/CartItem'
import { Link } from 'react-router-dom'
import { fetchCartItems, removeCartItem, updateCartItemQuantity } from '@/services/cart'
import { CartItemInterface } from '@/constants'
import toast from 'react-hot-toast'

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemInterface[]>([])
  const [load, setLoad] = useState<boolean>(false)
  const [price, setPrice] = useState<number>(0)

  useEffect(() => {
    const token: string | null = localStorage.getItem('accessToken')

    if (token) {
      fetchCartItems()
        .then((response) => {
          setCartItems(response)
          calculateTotal(response)
          console.log(response)
        })
        .catch((error) => {
          console.error('Error fetching cart items:', error)
        })
    }
    calculateTotal(cartItems)
  }, [load])

  const handleUpdateQuantity = async (CartId: number, newQuantity: number) => {
    try {
      await updateCartItemQuantity(CartId, newQuantity)
      setCartItems((prevCartItems) => prevCartItems.map((cartItem) => (cartItem.CartID === CartId ? { ...cartItem, Quantity: newQuantity } : cartItem)))

      calculateTotal(cartItems.map((cartItem) => (cartItem.CartID === CartId ? { ...cartItem, Quantity: newQuantity } : cartItem)))
    } catch (error) {
      console.error('Error updating quantity:', error)
    }
  }

  const handleDelete = async (CartId: number) => {
    try {
      await removeCartItem(CartId)
      setLoad((prev) => !prev)
    } catch (error) {
      console.error('Error Deleting quantity:', error)
    }
  }

  const calculateTotal = (cartItems: CartItemInterface[]) => {
    const totalPrice = cartItems.reduce((total, cartItem) => {
      return total + cartItem.Price * cartItem.Quantity
    }, 0)

    const finalPrice = totalPrice + 4.99

    setPrice(finalPrice)
  }

  return (
    <div className="relative text-white bg-transparent ">
      <h1 className="mb-10 text-2xl font-bold text-center">Cart Items</h1>
      <div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0">
        {cartItems.length !== 0 ? (
          <div className="rounded-lg ">
            {cartItems.map((cart) => (
              <CartItem
                updateCart={handleUpdateQuantity}
                deleteCart={handleDelete}
                key={cart.CartID}
                CartID={cart.CartID}
                ProductID={cart.ProductID}
                imageURL={cart.imageURL}
                ProductName={cart.ProductName}
                Description={cart.Description}
                Quantity={cart.Quantity}
                Price={cart.Price}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-3/6">
            <h1 className="mb-4 text-3xl">Your cart is empty!</h1>
            <Link to="/product" className="flex items-center gap-2 text-[#C07F00]/90 text-lg text-center">
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
            <button className="mt-6 w-full rounded-md  bg-[#C07F00]/90 py-1.5 font-medium text-blue-50 ">Check out</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage
