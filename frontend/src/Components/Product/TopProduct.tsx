import React from 'react'
import Harry from '/assets/Harry.webp'
import ProductCard from '@/components/common/ui/ProductCard'
import axios from 'axios'
import { Product } from '@/constants'

function TopProduct() {
  const [topProducts, setTopProducts] = React.useState<Product[]>([])
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/products/?limit=4`)
        console.log(response.data)
        setTopProducts(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  const addCart = (productId: number, quantity: number) => {
    // Implement your add to cart logic here
    console.log(`Product ID: ${productId}, Quantity: ${quantity} added to cart`)
  }

  return (
    <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {topProducts.map((product) => (
        <ProductCard key={product.ProductID} product={product} addCart={addCart} />
      ))}
    </div>
  )
}

export default TopProduct
