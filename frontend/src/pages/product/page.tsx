import React from 'react'
import ProductCard from '@/components/common/ui/ProductCard'
import axios from 'axios'
import { Product } from '@/constants'

const filters = [
  { id: 1, value: 'high', label: 'High to Low' },
  { id: 2, value: 'low', label: 'Low to High' },
  { id: 3, value: 'new-in', label: 'New In' },
  { id: 4, value: 'Clear', label: 'Clear' },
]

function ProductPage() {
  const [products, setProducts] = React.useState<Product[]>([])
  const [filter, setFilter] = React.useState('')
  const [searchInput, setSearchInput] = React.useState('')
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/products/?query=${filter || 'None'}&search=${searchInput}`)
        console.log(response.data)
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [filter, searchInput])

  const addCart = (productId: number, quantity: number) => {
    console.log(`Product ID: ${productId}, Quantity: ${quantity} added to cart`)
  }

  return (
    <div className="relative flex flex-col items-center w-full py-10 justify-cente lg:items-start lg:flex-row">
      <div className="items-center justify-center hidden w-1/4 lg:flex">
        <div className="flex flex-col items-start justify-center">
          <div>
            <input
              type="text"
              onChange={(e) => {
                setSearchInput(e.target.value)
              }}
              placeholder="search for harry potter"
              className="px-6 py-2 mb-4 focus:outline-none bg-black border-[#C07F00]/90 border rounded-md text-white"
            />
          </div>
          {filters.map((avail_filter) => (
            <div className="flex items-center mb-4" key={avail_filter.id}>
              <input
                onChange={(e) => {
                  setFilter(e.target.value)
                }}
                id={`sort-${avail_filter.value}`}
                type="radio"
                value={avail_filter.value}
                name="sort"
                className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500"
              />
              <label htmlFor={`sort-${avail_filter.value}`} className="text-lg font-medium text-[#C07F00]/90 ms-2">
                {avail_filter.label}
              </label>
            </div>
          ))}

          <button
            onClick={() => {
              setFilter('')
              setSearchInput('')
            }}
            className="px-6 py-3 text-[#C07F00]/90 border border-[#C07F00]/90"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="flex items-start justify-center lg:hidden">
        <div className="flex flex-col items-start justify-center">
          <div>
            <input
              type="text"
              onChange={(e) => {
                setSearchInput(e.target.value)
              }}
              placeholder="search for harry potter"
              className="px-6 py-2 mb-4 focus:outline-none bg-black border-[#C07F00]/90 border rounded-md text-white"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="sort" className="text-lg font-medium text-[#C07F00]/90 mr-2">
              Sort By:
            </label>
            <select
              id="sort"
              onChange={(e) => {
                setFilter(e.target.value)
              }}
              className="w-32 p-2 border border-gray-300 focus:ring-yellow-500"
            >
              {filters.map((avail_filter) => (
                <option key={avail_filter.id} value={avail_filter.value}>
                  {avail_filter.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.ProductID} product={product} addCart={addCart} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage
