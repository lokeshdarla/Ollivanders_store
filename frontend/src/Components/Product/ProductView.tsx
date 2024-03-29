// ProductView.js
import React from 'react'
import TopProduct from './TopProduct'
import axios from 'axios'
import { Product } from '@/constants'
import { useParams } from 'react-router-dom'
import { addToCart } from '@/services/cart'

const ProductView = () => {
  const [product, setProduct] = React.useState<Product>()
  const { ProductId } = useParams<{ ProductId: string }>()
  const [quantity, setQuantity] = React.useState<number>(1)
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/products/${ProductId}`)
        console.log(response.data)
        setProduct(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [ProductId])

  return (
    <div className="flex flex-col gap-10">
      <div className="relative flex flex-col items-center justify-center md:flex-row">
        <div className="flex items-center justify-center md:w-1/2">
          <img className="px-10 transition-transform transform md:px-0 hover:scale-105 h-96" src={product?.ImageURL} alt="" />
        </div>
        <div className="flex flex-col items-start justify-center gap-5 px-10 text-white lg:px-20 md:w-1/2">
          <h2 className="text-4xl text-[#C07F00]/90 ">{product?.ProductName}</h2>
          <div className="w-full border border-dotted border-[#C07F00]/90"></div>
          <h3 className="text-2xl font-bold">Rs: {product?.Price} INR</h3>
          <div className="w-full border border-dotted border-[#C07F00]/90"></div>
          <div className="space-y-5">
            <p className="font-thin ">{product?.Description}</p>
            <div className="flex space-x-10">
              <form className="">
                <label htmlFor="counter-input" className="block mb-2 text-md font-medium text-[#C07F00]/90 dark:text-white">
                  Choose quantity:
                </label>
                <div className="relative flex items-center">
                  <button
                    onClick={() => {
                      if (quantity >= 2) setQuantity((prev) => prev - 1)
                    }}
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
                    className="inline-flex items-center justify-center w-5 h-5 p-4 text-xl bg-[#C07F00]/90 border rounded-full"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="counter-input"
                    min={1}
                    className="p-2 flex-shrink-0 text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                    value={quantity}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setQuantity((prev) => prev + 1)
                    }}
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    className="inline-flex items-center justify-center w-5 h-5 p-4 text-xl  bg-[#C07F00]/90 border rounded-full"
                  >
                    +
                  </button>
                </div>
              </form>
              <button
                onClick={async () => {
                  if (ProductId) {
                    try {
                      await addToCart({
                        ProductID: product?.ProductID || 0,
                        Quantity: quantity,
                      })
                    } catch (error) {
                      console.error('Error adding to cart:', error)
                    }
                  } else {
                    console.error('ProductId is undefined')
                  }
                }}
                className="px-3 text-lg py-2 border border-[#C07F00]/90 text-[#C07F00]/90 "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="px-16 text-white">
          Customers also watch these
          <hr className="mt-4" />
        </h1>
        <TopProduct />
      </div>
    </div>
  )
}

export default ProductView
