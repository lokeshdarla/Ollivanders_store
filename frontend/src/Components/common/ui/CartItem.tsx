import React from 'react'
import { removeCartItem, updateCartItemQuantity } from '@/services/cart'
import { Trash } from 'lucide-react'
import { CartItemProps } from '@/constants'
import toast from 'react-hot-toast'

const CartItem: React.FC<CartItemProps> = ({ CartID, ProductID, Quantity, ProductName, Description, Price, imageURL, updateCart, deleteCart }) => {
  return (
    <div className="flex items-center gap-5 p-6 mb-6 rounded-lg border-2 border-dotted border-[#C07F00]/90">
      <div className="flex items-center gap-10 ">
        <div className="w-40 h-40 overflow-hidden rounded-full">
          <img src={imageURL} alt="product-image" className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="flex-col items-center">
        <div className="flex flex-col items-start mb-10">
          <h2 className="text-lg font-bold">{ProductName}</h2>
          <p className="text-xs">{Description}</p>
        </div>
        <div className="flex items-center justify-end gap-5">
          <div className="relative flex items-center">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="counter-input"
              onClick={() => {
                if (Quantity > 1) {
                  updateCart(CartID, Quantity - 1)
                } else {
                  toast.custom(<div>Hello World</div>)
                }
              }}
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
              value={Quantity}
              required
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="counter-input"
              onClick={() => {
                updateCart(CartID, Quantity + 1)
              }}
              className="inline-flex items-center justify-center w-5 h-5 p-4 text-xl  bg-[#C07F00]/90 border rounded-full"
            >
              +
            </button>
          </div>
          <p className="text-sm">${Price}</p>
          <button
            onClick={(e) => {
              removeCartItem(CartID)
              e.preventDefault()
            }}
            className="p-2 text-white bg-red-700 rounded-lg decoration-none hover:bg-red-800"
          >
            <Trash />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
